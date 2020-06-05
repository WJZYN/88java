!(function(l) {
  var e,
    n =
      '<svg><symbol id="icon-star_full" viewBox="0 0 1024 1024"><path d="M958.733019 411.348626 659.258367 353.59527 511.998465 85.535095 364.741633 353.59527 65.265958 411.348626 273.72878 634.744555 235.88794 938.463881 511.998465 808.479435 788.091594 938.463881 750.250754 634.744555Z"  ></path></symbol></svg>',
    t = (e = document.getElementsByTagName('script'))[e.length - 1].getAttribute('data-injectcss')
  if (t && !l.__iconfont__svg__cssinject__) {
    l.__iconfont__svg__cssinject__ = !0
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
        (o = l.document),
        (i = !1),
        (c = function() {
          i || ((i = !0), n())
        }),
        (d = function() {
          try {
            o.documentElement.doScroll('left')
          } catch (e) {
            return void setTimeout(d, 50)
          }
          c()
        })(),
        (o.onreadystatechange = function() {
          'complete' == o.readyState && ((o.onreadystatechange = null), c())
        }))
    var n, o, i, c, d
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
