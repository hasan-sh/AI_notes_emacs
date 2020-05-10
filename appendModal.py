import os


def make_path(root):
    result = ''
    dirs = root.split('/')
    for dir in dirs:
        if dir and dir != '.':
            result += '../'
            print(root, dir)

    return result

for root, dirs, files in os.walk("./"):
    for file in files:
        if file.endswith(".html"):
            current_file = open(os.path.join(root, file), 'a')
            correct_path = make_path(root)
            current_file.write('<script type="text/javascript" src="' + correct_path + 'imageModal.js"></script>')
            current_file.close()
            print(os.path.join(root, file), " Done!")
