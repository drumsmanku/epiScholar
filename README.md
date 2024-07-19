
## Prerequisites

- Node.js (https://nodejs.org/)
- Python (https://www.python.org/)

## Setup

### Backend

1. Navigate to the backend directory:

    ```bash
    cd backend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Run the backend server:

    ```bash
    node server.js
    ```

    The backend server will start on `http://localhost:3001`.

### Frontend

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Run the frontend development server:

    ```bash
    npm run dev
    ```

    The frontend server will start on `http://localhost:3000`.

### Data Extraction

1. Navigate to the data_extraction directory:

    ```bash
    cd data_extraction
    ```

2. Create and activate a virtual environment:

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. Install the required Python packages:

    ```bash
    pip install pandas openpyxl
    ```

4. Run the data extraction script:

    ```bash
    python data_extraction.py
    ```

    This will generate `extracted_data.json` which will be used by the backend.

## Usage

1. Ensure the backend server is running.
2. Ensure the frontend server is running.
3. Access the application by navigating to `http://localhost:3000` in your web browser.
