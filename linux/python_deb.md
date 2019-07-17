---
lang: "ru-RU"
sidebarDepth: 2
---
# Python for Debian

## Commands
```bash
# build debian package
python3 setup.py --command-packages=stdeb.command bdist_deb

# lint package
lintian deb_dist/<package_name>.deb

# show package metadata
dpkg -I deb_dist/<package_name>.deb

# list files in package
dpkg -c deb_dist/<package_name>.deb

# install package
sudo dpkg -i deb_dist/<package_name>.deb
```

## `setup.py`
```python
from setuptools import setup, find_packages

setup(
    name="tool",
    description="Super tool",
    version="0.0.1",
    packages=find_packages(),
    scripts=['tool'],
    python_requires='>=3.6',

    author="Tool Author",
    author_email="author@domain.com",
    package_data = {
        'tool': ['resources/*']
    },
    data_files = [('/usr/share/man/man1', ['doc/tool.1'])]
)
```

## `stdeb.cfg`
```
[DEFAULT]
Depends3: u-boot-tools, cpio
```

## Man Page
```markdown
---
title: tool(1)
author: Tool Author
date: July 2019
header: tool tool
---

# NAME

tool – super cool tool

# SYNOPSIS

tool \<args\>
: run tool with args

```

**Translate to man page**
```bash
pandoc tool.md -s -t man > tool.1
```