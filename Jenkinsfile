pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
        }
    }

    environment {
            MYGITHUB = credentials('MyGitHub')
    }

    stages {
        stage('Build') { 
            steps {
                sh 'node branch.js' 
            }
        }
    }
}
