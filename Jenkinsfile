pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker-hub')
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/irem-atak/devops-bootcamp.git'
            }
        }
        stage('Build') {
            steps {
                script {
                    docker.build("irematk/devops-bootcamp:bootcamp-task${env.BUILD_ID}")
                }
            }
        }
        stage('Test') {
            steps {
                sh 'docker run --rm irematk/devops-bootcamp:bootcamp-task${env.BUILD_ID} pytest'
            }
        }
        stage('Push') {
            steps {
                script {
                    docker.withRegistry('', 'dockerhub') {
                        docker.image("irematk/devops-bootcamp:bootcamp-task${env.BUILD_ID}").push()
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    kubectl.apply('-f deployment.yaml')
                    kubectl.apply('-f service.yaml')
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}