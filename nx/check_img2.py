import os
import csv

# === CONFIG ===
csv_file = "valid_names.csv"          # path to your CSV file
image_dir = "icon"           # directory to check
extensions = [".png", ".gif"]  # allowed image types

# === LOAD CSV VALUES ===
expected_files = []

with open(csv_file, newline='', encoding='utf-8') as f:
    reader = csv.reader(f)
    for row in reader:
        if row:  # skip empty rows
            expected_files.append(row[0].strip())

# === CHECK FILES ===
missing = []

for name in expected_files:
    found = False
    
    # If the CSV already includes extensions, check directly
    if os.path.splitext(name)[1]:
        if os.path.isfile(os.path.join(image_dir, name)):
            found = True
    else:
        # Try all extensions
        for ext in extensions:
            if os.path.isfile(os.path.join(image_dir, name + ext)):
                found = True
                break
    
    if not found:
        missing.append(name)

# === REPORT RESULTS ===
if missing:
    print("Missing images:")
    for m in missing:
        print(m)
else:
    print("All images are present!")