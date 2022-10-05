---
title: "self and class<< in ruby"
date: "2022-10-04T07:28:00.000Z"
description: "class method in Ruby"
tags: ["ruby", "class method"]

---

You can use `class << self`, `self.method` or `className.method` for class method

```ruby
class Project
  def initialize(project_name)
    @project_name = project_name
  end

  def project_name
    "#{@project_name}"
  end

  def self.who
    "Ruby Project class"
  end

  def Project.who2
    "Ruby Project class 2"
  end 

  class << self
    def who3
      "Ruby Project class 3"
    end
  end
end

project = Project.new("Ruby Demo")
puts project.project_name
puts Project.who
puts Project.who2
puts Project.who3
```