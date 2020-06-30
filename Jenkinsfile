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
                        prodName = "UCV"
                    } else {
                        prodName = "Accelerate"
                    }
                    echo prodName
                    def inptext = readFile file: "test.js" 
                    echo "\n------------ before replacing the PRODUCT name \t $inptext"
                    writeFile file: "test.js", text: ""
                    writeFile file: "test.js", text: inptext.replaceAll("PRODUCT", prodName)
                    def output = readFile file: "test.js"
                    echo "\n------------ after replacing the PRODUCT name \t $output"
                }
            }
        }
    }
}
