from flask import Flask, render_template, request, redirect, flash
from flask_mail import Mail, Message

app = Flask(__name__)
app.secret_key = 'supersecretkey'

# Email config
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'tentenhlumza@gmail.com'
app.config['MAIL_PASSWORD'] = 'jlrb uzlr jvgt ebtp'

mail = Mail(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/contact', methods=['POST'])
def contact():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']

    msg = Message(f"New message from {name}", sender=email, recipients=['tentenhlumza@gmail.com'])
    msg.body = message
    mail.send(msg)
    flash('Message sent successfully!')
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
