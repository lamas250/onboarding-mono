data "archive_file" "api-archive" {
  source_dir  = "../backend/src/dist/"
  output_path = "files/onboarding.zip"
  type        = "zip"
}