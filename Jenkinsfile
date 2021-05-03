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
        stage('Build') { 
            steps {
                git (
                    url: 'https://github.com/a-gomathi/Docker.git',
                    credentialsId: 'MyGitHub',
                    branch: 'master'
                )
                sh 'node test.js' 
            }
        }
    }
}
