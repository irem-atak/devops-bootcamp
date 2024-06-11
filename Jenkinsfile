pipeline {
  environment {
    dockerimagename = "irematk/devops-bootcamp"
    dockerImage = ""
  }
  agent {

    kubernetes {

      label 'my-app-deployment-89d4845dc-cdn28'

    }

  }
  stages {
    stage('Checkout Source') {
      steps {
        git branch: 'main',
            url: 'https://github.com/irem-atak/devops-bootcamp.git'
      }
    }
    stage('Build image') {
      steps{
        script {
          dockerImage = docker.build dockerimagename
        }
      }
    }
    stage('Pushing Image') {
      environment {
          registryCredential = 'docker-cred'
           }
      steps{
        script {
          docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
            dockerImage.push("latest")
          }
        }
      }
    }
    stage('Deploying container to Kubernetes') {
      steps {
        script {
          kubernetesDeploy(configs: "deployment.yaml", 
                                         "service.yaml")
        }
      }
    }
  }
}