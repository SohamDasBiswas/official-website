from flask import Flask, render_template, request, redirect,url_for
import smtplib
from email.mime.text import MIMEText
import time
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('loading.html')
    
    

@app.route('/home')
def home():
    return render_template("home.html")




if __name__ == "__main__":
    app.debug= True
    app.run()