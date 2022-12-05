# This is the data analysis file from my experiment data, credit @ Zhangliang Ma

# code restructured for a more readable format

# due to confidential problem, I made up this data file, much smaller than the 
# original one

# as a result, some of the statistical models may fail to work
# but they all run perfectly on my original data and code


library("Matrix")
library("lme4")
library("blme")
library("rstatix")
library("effects")
library("car")

data = read.csv(file = 'data_file.csv')

# ======================= Add a column of mental model type ====================

model_category <- c("program","program","program","program","program",
                    "situation","situation","situation","situation","situation","situation",
                    "execution","execution","execution","execution","execution")

model_type <- c()

for(i in 1:max(data$subject_ID)){
  model_type <- c(model_type, model_category)
}

data$model_type <- model_type


# ============================== transforming data file ================================

df <- data.frame(matrix(ncol=7, nrow=0))

for (i in 1:max(data$subject_ID)){
  row_program <- c(i, data[data$subject_ID == i, ]$Task_type[1], "program", 
                   mean(data[data$subject_ID == i & data$model_type == "program", ]$Accuracy),
                   data[data$subject_ID == i, ]$Assessment_Self[1],
                   data[data$subject_ID == i, ]$Assessment_Peers[1],
                   data[data$subject_ID == i, ]$Language[1])
  
  row_situation <- c(i, data[data$subject_ID == i, ]$Task_type[1], "situation", 
                     mean(data[data$subject_ID == i & data$model_type == "situation", ]$Accuracy),
                     data[data$subject_ID == i, ]$Assessment_Self[1],
                     data[data$subject_ID == i, ]$Assessment_Peers[1],
                     data[data$subject_ID == i, ]$Language[1])
  
  row_execution <- c(i, data[data$subject_ID == i, ]$Task_type[1], "execution", 
                     mean(data[data$subject_ID == i & data$model_type == "execution", ]$Accuracy),
                     data[data$subject_ID == i, ]$Assessment_Self[1],
                     data[data$subject_ID == i, ]$Assessment_Peers[1],
                     data[data$subject_ID == i, ]$Language[1])
  
  df <- rbind(df, row_program)
  df <- rbind(df, row_situation)
  df <- rbind(df, row_execution)
}

colnames(df) <- c("id", "task_type", "model_type","accuracy","self","peer","lang")

df$id <- as.numeric(as.character(df$id))
df$accuracy <- as.numeric(as.character(df$accuracy))
df$self <- as.numeric(as.character(df$self))
df$peer <- as.numeric(as.character(df$peer))


# -- mean accuracy (of all 16 questions)

mean(df$accuracy) # percentage
mean(df$accuracy) * 16 # num of correctly answered questions (out of all 16)


# -- mean accuracy (between type of tasks)

# percentage (recall group)
mean(df[df$task_type == "recall", ]$accuracy) 
# number of correctly answered questions (out of all 16) (recall)
mean(df[df$task_type == "recall", ]$accuracy) * 16 

# percentage (do group)
mean(df[df$task_type == "do", ]$accuracy) 
# number of correctly answered questions (out of all 16) (do)
mean(df[df$task_type == "do", ]$accuracy) * 16 


# -- mean accuracy (between mental model type)

# percentage (program model)
mean(df[df$model_type == "program", ]$accuracy) 
# number of correctly answered questions (out of 5) (program)
mean(df[df$model_type == "program", ]$accuracy) * 5 

# percentage (situation model)
mean(df[df$model_type == "situation", ]$accuracy) 
# number of correctly answered questions (out of 6) (situation)
mean(df[df$model_type == "situation", ]$accuracy) * 6 

# percentage (execution model)
mean(df[df$model_type == "execution", ]$accuracy) 
# number of correctly answered questions (out of 5) (execution)
mean(df[df$model_type == "execution", ]$accuracy) * 5 


# -- mean accuracy (between language)

# percentage (English)
mean(df[df$lang == "English", ]$accuracy)
# number of correctly answered questions (out of 16) (English)
mean(df[df$lang == "English", ]$accuracy) * 16

# percentage (Chinese)
mean(df[df$lang == "Chinese", ]$accuracy)
# number of correctly answered questions (out of 16) (English)
mean(df[df$lang == "Chinese", ]$accuracy) * 16


# -- mean personal assessment score

# self assessment: overall
mean(df$self)
# peer assessment: overall
mean(df$peer)

# personal assessment: by task type
# read-to-recall group
mean(df[df$task_type == "recall", ]$self)
mean(df[df$task_type == "recall", ]$peer)
# read-to-do group
mean(df[df$task_type == "do", ]$self)
mean(df[df$task_type == "do", ]$peer)


# personal assessment: by language 
# English: self and peer
mean(df[df$lang == "English", ]$self)
mean(df[df$lang == "English", ]$peer)
# Chinese: self and peer
mean(df[df$lang == "Chinese", ]$self)
mean(df[df$lang == "Chinese", ]$peer)


# personal assessment: by mental model type
# this is a within-subject factor so no need to calculate mean


# =================== correlation test ===========================================
# -- correlation test of self/ peer assessment between accuracy
# overall 
cor.test(df$self, df$accuracy, method = "spearman", exact = FALSE)
cor.test(df$peer, df$accuracy, method = "spearman", exact = FALSE)

# between mental model
cor.test(df[df$model_type == "program", ]$self, df[df$model_type == "program", ]$accuracy, 
         method = "spearman", exact = FALSE)
cor.test(df[df$model_type == "program", ]$peer, df[df$model_type == "program", ]$accuracy,
         method = "spearman", exact = FALSE)

cor.test(df[df$model_type == "situation", ]$self, df[df$model_type == "situation", ]$accuracy, 
         method = "spearman", exact = FALSE)
cor.test(df[df$model_type == "situation", ]$peer, df[df$model_type == "situation", ]$accuracy, 
         method = "spearman", exact = FALSE)

cor.test(df[df$model_type == "execution", ]$self, df[df$model_type == "execution", ]$accuracy, 
         method = "spearman", exact = FALSE)
cor.test(df[df$model_type == "execution", ]$peer, df[df$model_type == "execution", ]$accuracy, 
         method = "spearman", exact = FALSE)

# between task
cor.test(df[df$task_type == "recall", ]$self, df[df$task_type == "recall", ]$accuracy, 
         method = "spearman", exact = FALSE)
cor.test(df[df$task_type == "recall", ]$peer, df[df$task_type == "recall", ]$accuracy, 
         method = "spearman", exact = FALSE)

cor.test(df[df$task_type == "do", ]$self, df[df$task_type == "do", ]$accuracy, 
         method = "spearman", exact = FALSE)
cor.test(df[df$task_type == "do", ]$peer, df[df$task_type == "do", ]$accuracy, 
         method = "spearman", exact = FALSE)

# between language
cor.test(df[df$lang == "English", ]$self, df[df$lang == "English", ]$accuracy, 
         method = "spearman", exact = FALSE)
cor.test(df[df$lang == "English", ]$peer, df[df$lang == "English", ]$accuracy, 
         method = "spearman", exact = FALSE)

cor.test(df[df$lang == "Chinese", ]$self, df[df$lang == "Chinese", ]$accuracy, 
         method = "spearman", exact = FALSE)
cor.test(df[df$lang == "Chinese", ]$peer, df[df$lang == "Chinese", ]$accuracy, 
         method = "spearman", exact = FALSE)


# ========= average, std, correlation (personal assessment) of each question ================
data_each_id <- c()
data_each_mean <- c()
data_each_sd <- c()
data_each_cor_self <- c()
data_each_cor_peer <- c()
data_each_type <- c()

for (i in 1:max(data$Question_Num)){
  if(i <= 5){
    data_each_type <- c(data_each_type, "Program_model")
  }
  else if(i <= 11){
    data_each_type <- c(data_each_type, "Situation_model")
  }
  else{
    data_each_type <- c(data_each_type, "Execution_model")
  }
  data_each_id <- c(data_each_id, i)
  data_each_mean <- c(data_each_mean, mean(data[data$Question_Num == i,]$Accuracy))
  data_each_sd <- c(data_each_sd, sd(data[data$Question_Num == i,]$Accuracy))
  data_each_cor_self <- c(data_each_cor_self, 
                          as.numeric(cor.test(data[data$Question_Num == i,]$Accuracy,
                                              data[data$Question_Num == i,]$Assessment_Self,
                                              method = "spearman", exact = FALSE)["estimate"]))
  data_each_cor_peer <- c(data_each_cor_peer, 
                          as.numeric(cor.test(data[data$Question_Num == i,]$Accuracy,
                                              data[data$Question_Num == i,]$Assessment_Peers,
                                              method = "spearman", exact = FALSE)["estimate"]))
  
}

data_each <- data.frame(data_each_id, data_each_type, data_each_mean, data_each_sd, data_each_cor_self, data_each_cor_peer)
colnames(data_each) <- c("id", "model_type", "mean","sd","cor_self","cor_peer")

mean(data_each[data_each$model_type == "Program_model",]$mean)
mean(data_each[data_each$model_type == "Situation_model",]$mean)
mean(data_each[data_each$model_type == "Execution_model",]$mean)

mean(data_each[data_each$model_type == "Program_model",]$sd)
mean(data_each[data_each$model_type == "Situation_model",]$sd)
mean(data_each[data_each$model_type == "Execution_model",]$sd)

mean(data_each[data_each$model_type == "Program_model",]$cor_self)
mean(data_each[data_each$model_type == "Situation_model",]$cor_self)
mean(data_each[data_each$model_type == "Execution_model",]$cor_self)

mean(data_each[data_each$model_type == "Program_model",]$cor_peer)
mean(data_each[data_each$model_type == "Situation_model",]$cor_peer)
mean(data_each[data_each$model_type == "Execution_model",]$cor_peer)

model_type_factor <- as.factor(data_each$model_type)

each_linear_mean <- glm(mean ~ model_type_factor, data = data_each)
each_effect_mean <- allEffects(each_linear_mean)
print(each_effect_mean)
plot(each_effect_mean, main = "mean")


each_linear_sd <- glm(sd ~ model_type_factor, data = data_each)
each_effect_sd <- allEffects(each_linear_sd)
print(each_effect_sd)
plot(each_effect_sd, main = "standard deviation")


# =============== box plot analysis ============================================
sum_accuracy <- c()
all_language <- c()
task_type <- c()
self_review <- c()
peer_review <- c()
for (i in 1:max(df$id)) {
  sum_accuracy <- c(sum_accuracy, sum(df[df$id == i, ]$accuracy))
  all_language <- c(all_language, df[df$id == i, ]$lang)
  task_type <- c(task_type, df[df$id == i, ]$task_type)
  self_review <- c(self_review, df[df$id == i, ]$self[1])
  peer_review <- c(peer_review, df[df$id == i, ]$peer[1])
}
sum_all_accuracy_df <- data.frame(sum_accuracy, all_language, task_type, self_review, peer_review)


# visualize data
boxplot(sum_all_accuracy_df$sum_accuracy ~ sum_all_accuracy_df$task_type,
        ylab = "accuracy %", xlab = "task type")
boxplot(sum_all_accuracy_df$sum_accuracy ~ sum_all_accuracy_df$all_language, 
        ylab = "accuracy %", xlab = "language")


sum_program <- c()
sum_situation <- c()
sum_execution <- c()

for(i in 1:max(data$subject_ID)){
  sum_program <- c(sum_program, sum(data[data$model_type == "program" & data$subject_ID == i, ]$Accuracy))
  sum_situation <- c(sum_situation, sum(data[data$model_type == "situation" & data$subject_ID == i, ]$Accuracy))
  sum_execution <- c(sum_execution, sum(data[data$model_type == "execution" & data$subject_ID == i, ]$Accuracy))
}

boxplot(sum_program / 5,
        ylab = "accuracy %", xlab = "program", ylim = c(0, 1)) 
boxplot(sum_situation / 6,
        ylab = "accuracy %", xlab = "situation", ylim = c(0, 1)) 
boxplot(sum_execution / 5, 
        ylab = "accuracy %", xlab = "execution", ylim = c(0, 1)) 


# ==================== overall factors ===============================================

subject_factor <- as.factor(data$subject_ID)
task_factor <- as.factor(data$Task_type)
question_factor <- as.factor(data$Question_Type)
language_factor <- as.factor(data$Language)
accuracy_factor <- as.factor(data$Accuracy)

# ======== factoring against language =================================================

# English
data_english <- data[data$Language == "English", ]

subject_factor_english <- as.factor(data_english$subject_ID)
task_factor_english <- as.factor(data_english$Task_type)
question_factor_english <- as.factor(data_english$Question_Type)
accuracy_factor_english <- as.factor(data_english$Accuracy)




# ===========================================================================

model_factor_english <- as.factor(data_english$model_type)


task_model_intercept_english <- bglmer(accuracy_factor_english ~ task_factor_english * model_factor_english + 
                                         (1 | subject_factor_english),
                                       family = binomial, 
                                       control = glmerControl(optimizer = "nlminbwrap"),
                                       data = data_english)

task_model_slope_english <- bglmer(accuracy_factor_english ~ task_factor_english * model_factor_english + 
                                     (1 + task_factor_english * model_factor_english | subject_factor_english),
                                   family = binomial, 
                                   control = glmerControl(optimizer = "nlminbwrap"),
                                   data = data_english)

summary(task_model_intercept_english)
summary(task_model_slope_english)

Anova(task_model_intercept_english)
Anova(task_model_slope_english)
anova(task_model_intercept_english, task_model_slope_english)

effect_task_model_intercept_english <- allEffects(task_model_intercept_english)
effect_task_model_slope_english <- allEffects(task_model_slope_english)

print(effect_task_model_intercept_english)
print(effect_task_model_slope_english)

plot(effect_task_model_intercept_english, multiline=TRUE, confint=TRUE, ci.style="bars",
     main="English random intercept only", 
     xlab = "model type",
     ylab = "Accuracy", lty = c(1,2))

# ============== Chinese model model ==================================

# Chinese
data_chinese <- data[data$Language == "Chinese", ]

subject_factor_chinese <- as.factor(data_chinese$subject_ID)
task_factor_chinese <- as.factor(data_chinese$subject_ID)
question_factor_chinese <- as.factor(data_chinese$subject_ID)
accuracy_factor_chinese <- as.factor(data_chinese$subject_ID)

model_factor_chinese <- as.factor(data_chinese$model_type)


task_model_intercept_chinese <- bglmer(accuracy_factor_chinese ~ task_factor_chinese * model_factor_chinese + 
                                         (1 | subject_factor_chinese),
                                       family = binomial, 
                                       control = glmerControl(optimizer = "nlminbwrap"),
                                       data = data_chinese)

task_model_slope_chinese <- bglmer(accuracy_factor_chinese ~ task_factor_chinese * model_factor_chinese + 
                                     (1 + task_factor_chinese * model_factor_chinese | subject_factor_chinese),
                                   family = binomial, 
                                   control = glmerControl(optimizer = "nlminbwrap"),
                                   data = data_chinese)

summary(task_model_intercept_chinese)
summary(task_model_slope_chinese)

Anova(task_model_intercept_chinese)
Anova(task_model_slope_chinese)
anova(task_model_intercept_chinese, task_model_slope_chinese)

effect_task_model_intercept_chinese <- allEffects(task_model_intercept_chinese)
effect_task_model_slope_chinese <- allEffects(task_model_slope_chinese)

print(effect_task_model_intercept_chinese)
print(effect_task_model_slope_chinese)

plot(effect_task_model_intercept_chinese, multiline=TRUE, confint=TRUE, ci.style="bars",
     main="Chinese random intercept only", 
     xlab = "model type",
     ylab = "Accuracy", lty = c(1,2))

# =============== all model model ============================================

model_factor <- as.factor(data$model_type)

all_model_intercept <- bglmer(accuracy_factor ~ task_factor * model_factor + (1 | subject_factor),
                              family = binomial, 
                              control = glmerControl(optimizer = "nlminbwrap"),
                              data = data)


all_model_slope <- bglmer(accuracy_factor ~ task_factor * model_factor + 
                            (1 + task_factor * model_factor | subject_factor),
                          family = binomial, 
                          control = glmerControl(optimizer = "nlminbwrap"),
                          data = data)

summary(all_model_intercept)
summary(all_model_slope)

Anova(all_model_intercept)
Anova(all_model_slope)
anova(all_model_intercept, all_model_slope)

effect_all_model_intercept <- allEffects(all_model_intercept)
effect_all_model_slope <- allEffects(all_model_slope)

print(effect_all_model_intercept)
print(effect_all_model_slope)

plot(effect_all_model_intercept, multiline=TRUE, confint=TRUE, ci.style="bars",
     main="task * question * language",
     xlab = "model type",
     ylab = "Accuracy", lty = c(1,2))

