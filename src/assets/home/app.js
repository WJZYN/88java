!(function(d) {
  var e,
    n =
      '<svg><symbol id="icon-weixin" viewBox="0 0 1024 1024"><path d="M693.12 347.264c11.776 0 23.36 0.896 35.008 2.176-31.36-146.048-187.456-254.528-365.696-254.528C163.2 94.912 0 230.656 0 403.136c0 99.52 54.272 181.248 145.024 244.736L108.8 756.864l126.72-63.488c45.312 8.896 81.664 18.112 126.912 18.112 11.392 0 22.656-0.512 33.792-1.344-7.04-24.256-11.2-49.6-11.2-76.032C385.088 475.776 521.024 347.264 693.12 347.264zM498.304 249.024c27.392 0 45.376 17.984 45.376 45.248 0 27.136-17.984 45.312-45.376 45.312-27.072 0-54.336-18.176-54.336-45.312C443.968 266.944 471.168 249.024 498.304 249.024zM244.672 339.584c-27.2 0-54.592-18.176-54.592-45.312 0-27.264 27.392-45.248 54.592-45.248S289.92 266.944 289.92 294.272C289.92 321.408 271.872 339.584 244.672 339.584zM1024 629.76c0-144.896-145.024-262.976-307.904-262.976-172.48 0-308.224 118.144-308.224 262.976 0 145.28 135.808 262.976 308.224 262.976 36.096 0 72.512-9.024 108.736-18.112l99.392 54.528-27.264-90.624C969.728 783.872 1024 711.488 1024 629.76zM616.128 584.384c-17.984 0-36.224-17.92-36.224-36.224 0-18.048 18.24-36.224 36.224-36.224 27.52 0 45.376 18.176 45.376 36.224C661.504 566.464 643.648 584.384 616.128 584.384zM815.488 584.384c-17.856 0-36.032-17.92-36.032-36.224 0-18.048 18.112-36.224 36.032-36.224 27.264 0 45.376 18.176 45.376 36.224C860.864 566.464 842.752 584.384 815.488 584.384z"  ></path></symbol><symbol id="icon-app" viewBox="0 0 1024 1024"><path d="M417.798203 1016.25308c28.670112 16.894887 51.196629 5.631629 51.196629-28.670112V588.76123c0-34.301741-23.038483-68.603482-51.196629-85.49837L87.579948 297.964379c-28.670112-11.263258-51.196629 0-51.196629 28.670112v398.821738c0 34.301741 23.038483 68.603482 51.196629 85.49837l330.218255 205.298481zM138.776577 172.532639c-28.670112 16.894887-28.670112 39.93337 0 56.828258l325.098592 205.298481c28.670112 16.894887 68.603482 16.894887 96.761628 5.631629L885.73539 274.925896c28.670112-16.894887 28.670112-39.93337 0-56.828258L543.229944 12.799157c-23.038483-16.894887-68.603482-16.894887-96.761629 0L138.776577 172.532639z m421.86022 815.050329c0 34.301741 23.038483 45.565 51.196629 28.670112l325.098592-165.365111c28.670112-16.894887 51.196629-51.196629 51.196629-85.49837v-399.333704c0-34.301741-23.038483-45.565-51.196629-28.670112l-325.098592 165.365111c-28.670112 16.894887-51.196629 51.196629-51.196629 85.49837v399.333704z"  ></path></symbol></svg>',
    t = (e = document.getElementsByTagName('script'))[e.length - 1].getAttribute('data-injectcss')
  if (t && !d.__iconfont__svg__cssinject__) {
    d.__iconfont__svg__cssinject__ = !0
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
      )
    } catch (e) {
      console && console.log(e)
    }
  }
  !(function(e) {
    if (document.addEventListener)
      if (~['complete', 'loaded', 'interactive'].indexOf(document.readyState)) setTimeout(e, 0)
      else {
        var t = function() {
          document.removeEventListener('DOMContentLoaded', t, !1), e()
        }
        document.addEventListener('DOMContentLoaded', t, !1)
      }
    else
      document.attachEvent &&
        ((n = e),
        (c = d.document),
        (o = !1),
        (i = function() {
          o || ((o = !0), n())
        }),
        (l = function() {
          try {
            c.documentElement.doScroll('left')
          } catch (e) {
            return void setTimeout(l, 50)
          }
          i()
        })(),
        (c.onreadystatechange = function() {
          'complete' == c.readyState && ((c.onreadystatechange = null), i())
        }))
    var n, c, o, i, l
  })(function() {
    var e, t
    ;((e = document.createElement('div')).innerHTML = n),
      (n = null),
      (t = e.getElementsByTagName('svg')[0]) &&
        (t.setAttribute('aria-hidden', 'true'),
        (t.style.position = 'absolute'),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = 'hidden'),
        (function(e, t) {
          t.firstChild
            ? (function(e, t) {
                t.parentNode.insertBefore(e, t)
              })(e, t.firstChild)
            : t.appendChild(e)
        })(t, document.body))
  })
})(window)
