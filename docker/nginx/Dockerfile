FROM alpine:latest as builder

ENV CC=/usr/bin/clang
ENV CXX=/usr/bin/clang++

ARG NGINX_VERSION
ENV NGINX_VERSION ${NGINX_VERSION:-1.19.10}

ENV CFLAGS '-std=c11 -pedantic -pipe -fPIC -fstack-protector -O3 -Wall -Wextra -Wpointer-arith -Wconditional-uninitialized -Wno-unused-parameter -Wno-deprecated-declarations -mtune=native'

ENV CXXFLAGS '-std=c++14 -pedantic -pipe -fPIC -fstack-protector -O3 -Wall -Wextra -Wpointer-arith -Wconditional-uninitialized -Wno-unused-parameter -Wno-deprecated-declarations -mtune=native'

ENV LDFLAGS '-static -s -L/usr/include -L/usr/lib'

WORKDIR /tmp

ADD https://nginx.org/download/nginx-$NGINX_VERSION.tar.gz /tmp/nginx-$NGINX_VERSION.tar.gz

RUN sed -i -e 's/v[[:digit:]]\..*\//edge\//g' /etc/apk/repositories && \
  apk add --no-cache --virtual .build-deps \
    build-base \
    musl-dev \
    clang-dev \
    make \
    abuild \
    git \
    curl-dev \
    libstdc++ \
    automake \
    autoconf \
    bison \
    openssl-dev \
    pkgconf-dev \
    gcc \
    pcre-dev \
    libmaxminddb-dev \
    libxml2-dev \
    libxslt-dev \
    paxmark \
    openssl-dev \
    zlib-dev \
    linux-headers \
    geoip-dev \
    libedit-dev \
    findutils \
    brotli-dev \
    perl-dev && \
  apk add --no-cache -t .runtime-deps \
    brotli \
    musl \
    openssl \
    geoip \
    libmaxminddb \
    libxml2 \
    libxslt \
    zlib \
    libcrypto1.1 \
    pcre \
    perl \
    libssl1.1 && \
  tar xf nginx-$NGINX_VERSION.tar.gz && \
  cd nginx-$NGINX_VERSION \
  && git clone -b master --single-branch https://github.com/google/ngx_brotli 2>/dev/null && \
  ./configure \
    --prefix=/usr \
    --conf-path=/etc/nginx/nginx.conf \
    --sbin-path=/usr/bin/nginx \
    --pid-path=/run/nginx.pid \
    --lock-path=/run/lock/nginx.lock \
    --modules-path=/usr/lib/nginx/modules \
    --user=nginx \
    --group=nginx \
    --http-log-path=/var/log/nginx/access.log \
    --error-log-path=/var/log/nginx/error.log \
    --http-client-body-temp-path=/var/lib/nginx/client-body \
    --http-proxy-temp-path=/var/lib/nginx/proxy \
    --with-compat \
    --with-file-aio \
    --with-http_addition_module \
    --with-http_auth_request_module \
    --with-http_degradation_module \
    --with-http_geoip_module \
    --with-http_gunzip_module \
    --with-http_gzip_static_module \
    --with-http_realip_module \
    --with-http_secure_link_module \
    --with-http_slice_module \
    --with-http_ssl_module \
    --with-http_stub_status_module \
    --with-http_sub_module \
    --with-http_v2_module \
    --with-pcre \
    --with-pcre-jit \
    --with-stream \
    --with-stream_geoip_module \
    --with-stream_realip_module \
    --with-stream_ssl_module \
    --with-stream_ssl_preread_module \
    --with-threads \
    --without-http_auth_basic_module \
    --without-http_autoindex_module \
    --without-http_empty_gif_module \
    --without-http_fastcgi_module \
    --without-http_memcached_module \
    --without-http_scgi_module \
    --without-http_split_clients_module \
    --without-http_uwsgi_module \
    --add-module=./ngx_brotli 2>/dev/null && \
  make modules && \
  make && \
  make install && \
  addgroup -g 101 -S nginx && \
  adduser -S -D -H -u 101 -h /var/cache/nginx -s /sbin/nologin -G nginx -g nginx nginx && \
  mkdir -p /etc/acme && \
  mkdir -p /var/run/nginx && \
  mkdir -p /var/log/nginx && \
  chown nginx:nginx /srv /var/run/nginx /var/log/nginx && \
  chmod 2755 /srv /var/run/nginx /var/log/nginx && \
  cd /tmp && \
  rm -rf /tmp/* && \
  apk del .build-deps && \
  rm -rf /var/cache/apk/* && \
  find /etc/nginx -type f \( -name "*.defaults" \
    -o -name '*gi*' \
    -o -name "mime.types" \) -exec rm -f {} \; && \
  ln -sf /dev/stdout /var/log/nginx/access.log && \
  ln -sf /dev/stderr /var/log/nginx/error.log

VOLUME [ "/etc/nginx", "/srv/http" ]

EXPOSE 80
EXPOSE 443

HEALTHCHECK --interval=30m --timeout=10s --start-period=50s \
  CMD curl -f https://127.0.0.1 || exit 1

STOPSIGNAL SIGQUIT

CMD [ "nginx", "-g", "daemon off;" ]
