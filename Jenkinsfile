
node('nuxbuilder') {
    def app
    def repo
    stage('Cloning'){
        checkout scm    
    }
    repo = scm
    stage('Fetch image') {            
        echo 'Fetching Image from registry'
        def image
        image = docker.build("hanserf/node-webdev")
        
    }
    stage('Build code'){
        image.inside {
            echo 'Fetching Image from registry'
            sh '''
            npm config ls
            echo $PATH
            pwd
            tree .            
            '''
        }
    }        
}
