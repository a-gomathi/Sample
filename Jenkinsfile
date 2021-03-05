pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
        }
    }

    environment {
            Docker = credentials('Docker')
    }

    stages {
        stage('Checkout Source') {
            checkout scm
        }
        stage('Build') { 
            steps {
                git (
                    url: 'https://github.com/gomsOrg/Node.git',
                    credentialsId: 'MyGitHub',
                    branch: 'master'
                )
                sh "git checkout -b origin/master"
                sh 'node index.js' 
            }
        }
    }
}
