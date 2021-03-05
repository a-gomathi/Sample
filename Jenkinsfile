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
                    url: 'https://github.com/gomsOrg/Node.git',
                    credentialsId: 'MyGitHub',
                    branch: 'master'
                )
                sh 'node index.js' 
            }
        }
    }
}
