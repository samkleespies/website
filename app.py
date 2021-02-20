from flask import Flask, render_template
app = Flask(__name__,
            static_url_path='/static', 
            static_folder='static',
            template_folder='templates')


@app.route("/")
def default():
    return render_template('index.html')

@app.route('/resume')
def resume():
    return render_template('resume.html')

@app.route('/experience')
def experience():
    return render_template('experience.html')

@app.route('/videos')
def videos():
    return render_template('videos.html')


if __name__ == '__main__':
    app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run(debug=True)
