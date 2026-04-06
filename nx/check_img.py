import os
import csv
import shutil

image_dir = 'image'
csv_file = 'valid_names.csv'
output_dir = 'unmatched'

# Create output folder if it doesn't exist
print("here")
os.makedirs(output_dir, exist_ok=True)

# Load valid names from CSV into a set (fast lookup)
valid_names = set()

with open(csv_file, newline='') as f:
    reader = csv.reader(f)
    for row in reader:
        if row:  # skip empty rows
            valid_names.add(row[0].strip())

# Walk through images
for root, dirs, files in os.walk(image_dir):
    for filename in files:
        name, ext = os.path.splitext(filename)

        # Check if base name is NOT in CSV
        if name not in valid_names:
            src = os.path.join(root, filename)
            dst = os.path.join(output_dir, filename)

            # Avoid overwriting
            if os.path.exists(dst):
                print(f"skipping (already exists): {dst}")
                continue

            print(f"moving {src} to {dst}")
            shutil.move(src, dst)