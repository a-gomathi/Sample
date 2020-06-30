prodName = ''

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                script {
                    echo server
                    if (server == "IBM") {
                        prodName = 'UCV'
                    } else {
                        prodName = 'Accelerate'
                    }
                    echo prodName
                    def inptext = readFile file: "test.js" 
                    inptext = inptext.replaceAll(~/-{SERVER}-/, prodName)
                    writeFile file: "sample.js", text: inptext
                }
            }
        }
    }
}
