# Getting Started

This project converts any text prompt you submit to an image.

This project has 2 parts:
1. app: Next.js frontend
2. backend: FastApi backend that uses [Stability AI api](https://platform.stability.ai/) to do the text to image conversion


## Setup Steps

0. Setting up environment

```bash
cd backend
cp .env.example .env
```

Fill in the environment variables shared on email. Save file

1.  Backend

This project uses Python 3.9.12 within virtual environment.

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

Note: Backend runs on port 8000. If there is another service using the port, please free it up before you start this app.

2. Frontend 

This project is written on Node v16.16.0. You may use nvm to switch to this distribution

```bash
nvm use v16.16.0
cd app
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Backend Tests

```bash
cd backend
pytest
```