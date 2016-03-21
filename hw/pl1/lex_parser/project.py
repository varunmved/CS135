from flask import Flask
from flask_bootstrap import Bootstrap

app = Flask(__name__)
Bootstrap(app)

def create_app():
    app = Flask(__name__)
    Bootstrap(app)
    
    return app

