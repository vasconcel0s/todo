FROM python:3.7

ENV PYTHONDONTWRITEBYTECODE 1
ENV FLASK_APP "app.py"
ENV FLASK_ENV "development"
ENV FLASK_DEBUG True

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY Pip* /usr/src/app/

RUN pip install --upgrade pip \
    && pip install pipenv \
    && pipenv install --dev --system --deploy --ignore-pipfile

ADD . /usr/src/app

EXPOSE 5000

CMD ["flask", "run", "--host=0.0.0.0"
