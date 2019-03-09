workspace(name = "react_samples")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")

# JAVA
http_archive(
    name = "com_google_protobuf_javalite",
    sha256 = "d8a2fed3708781196f92e1e7e7e713cf66804bd2944894401057214aff4f468e",
    strip_prefix = "protobuf-5e8916e881c573c5d83980197a6f783c132d4276",
    urls = ["https://github.com/google/protobuf/archive/5e8916e881c573c5d83980197a6f783c132d4276.zip"],
)

git_repository(
    name = "io_bazel_rules_appengine",
    remote = "https://github.com/thelgevold/rules_appengine.git",
    commit = "d65baa509df874a0c360db581e2ee46772b5cbbe"
)

# Node Based Tools
http_archive(
    name = "build_bazel_rules_nodejs",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/0.27.1/rules_nodejs-0.27.1.tar.gz"],
    sha256 = "71867bb432496d6d54ccece234403fd1784b95f409492511236607c5190d3d4e",
)

# Protobuf
maven_jar(
    name = "protobuf_java_format",
    artifact = "com.googlecode.protobuf-java-format:protobuf-java-format:1.4",
    sha1 = "b8163b6940102c1808814471476f5293dfb419df",
)

git_repository(
    name = "com_google_protobuf",
    tag = "v3.6.1.3",
    remote = "https://github.com/protocolbuffers/protobuf.git"
)

# SASS
http_archive(
      name = "io_bazel_rules_sass",
      url = "https://github.com/bazelbuild/rules_sass/archive/1.17.2.zip",
      strip_prefix = "rules_sass-1.17.2",
)


load("@build_bazel_rules_nodejs//:defs.bzl", "yarn_install")

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")
install_bazel_dependencies()

load("@npm_bazel_typescript//:index.bzl", "ts_setup_workspace")

ts_setup_workspace()

load("@io_bazel_rules_sass//sass:sass_repositories.bzl", "sass_repositories")

sass_repositories()

load("@io_bazel_rules_appengine//appengine:java_appengine.bzl", "java_appengine_repositories")

java_appengine_repositories()