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
                    echo "\n------------ before replacing the PRODUCT name \t" inptext
                    inptext = inptext.replaceAll("PRODUCT", prodName)
                    def fileCount = readFile file: "test.js"
                    echo "\n--------------- fileCount.length before \t" fileCount.length
                    if (fileCount.length() != 0) {
                        writeFile file: "test.js", text: ""
                    }
                    echo "\n--------------- fileCount.length after \t" fileCount.length
                    writeFile file: "test.js", text: inptext
                    def output = readFile file: "test.js"
                    echo "\n------------ after replacing the PRODUCT name \t" output
                }
            }
        }
    }
}
