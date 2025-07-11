Gem::Specification.new do |s|
  s.name        = "chilsoft-theme"
  s.version     = "0.1.0"
  s.summary     = "A neon-tech dark Jekyll theme"
  s.authors     = ["bchilton9"]
  s.email       = ["you@example.com"]  # (optional but recommended)
  s.homepage    = "https://chilsoft.com"  # (or your GitHub repo URL)
  s.license     = "MIT"

  # Include everything necessary for a theme
  s.files = Dir[
    "_layouts/*.html",
    "_includes/*.html",
    "_sass/**/*.scss",
    "assets/**/*",
    "LICENSE",
    "README.md"
  ]

  s.add_runtime_dependency "jekyll", ">= 3.5"

  s.require_paths = ["_layouts", "_includes", "_sass"]
end
