resource "aws_sns_topic" "topic" {
  name = "contact-form-topic"
}

resource "aws_sns_topic_subscription" "email-target" {
  topic_arn = aws_sns_topic.topic.arn
  protocol  = "email"
  endpoint  = "tsimmonds278@gmail.com"
}