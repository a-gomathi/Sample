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
                sh 'node branch.js' 
            }
        }
    }
}
