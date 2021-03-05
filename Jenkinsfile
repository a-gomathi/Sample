pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
        }
    }

    environment {
        withCredentials([
            usernamePassword(credentialsId: 'MyGitHub', usernameVariable: 'MyGitHub_USER', passwordVariable: 'MyGitHub_PASSWORD')
        ]){
            USERNAME = ${MyGitHub_USER}
            PASSWORD = ${MyGitHub_PASSWORD}
        }
    }

    stages {
        stage('Build') { 
            steps {
                sh 'node branch.js' 
            }
        }
    }
}
