pipeline {
  environment {
    dockerimagename = "irematk/devops-bootcamp"
    registryCredential = 'docker-hub'
    kubeConfigCredentialsId = 'kubernetes-cred'
  }
  agent any
  stages {
    
    stage('Checkout Source') {
      steps {
        git branch: 'main',
            url: 'https://github.com/irem-atak/devops-bootcamp.git'
      }
    }
    stage('Build Image') {
      steps {
        script {
          dockerImage = docker.build dockerimagename
        }
      }
    }
    stage('Push Image') {
      steps {
        script {
          docker.withRegistry('https://registry.hub.docker.com', registryCredential) {
            dockerImage.push("last")
          }
        }
      }
    }
    stage('Deploy to Kubernetes') {
      steps {
        script {
          withKubeConfig([credentialsId: kubeConfigCredentialsId, serverUrl: 'https://kubernetes.default.svc.cluster.local']) {
            sh "kubectl apply -f deployment.yaml"
            sh "kubectl apply -f service.yaml"
          }
        }
      }
    }
  }
}
