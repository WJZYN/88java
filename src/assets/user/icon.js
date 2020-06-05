!(function(d) {
  var e,
    n =
      '<svg><symbol id="icon-shoucang" viewBox="0 0 1025 1024"><path d="M1020.85564 385.279248c-8.427984-26.487948-30.099941-45.751911-57.189888-49.965902l-83.075838-12.641975-171.569665-29.497942c-10.23398-1.805996-19.263962-8.427984-24.079953-18.059965l0-0.601999c-0.601999-2.407995-0.601999-4.213992-1.805996-6.621987L575.978509 41.537919c-3.009994-6.621987-7.223986-12.641975-11.437978-17.457966l0 0 0 0C550.694558 9.029982 532.634593 0 512.768632 0c-27.089947 0-51.1699 15.651969-63.209877 40.93592L329.158991 294.979424 60.667515 335.915344c-27.089947 4.213992-48.761905 22.875955-57.189888 49.965902-8.427984 27.089947-1.203998 55.985891 18.059965 75.249853l194.44562 197.455614-45.751911 278.725456c-4.815991 27.691946 6.019988 55.383892 28.293945 71.63786 21.671958 16.855967 50.567901 18.661964 74.045855 5.417989l240.197531-131.837743 240.197531 131.837743c10.23398 6.019988 21.671958 8.427984 32.507937 8.427984 14.447972 0 28.895944-4.815991 41.537919-14.447972 21.671958-16.855967 32.507937-43.945914 28.293945-71.63786l-45.751911-278.725456 194.44562-197.455614C1022.661636 441.265138 1029.283623 412.369195 1020.85564 385.279248z"  ></path></symbol><symbol id="icon-ziyuanxhdpi" viewBox="0 0 1024 1024"><path d="M512 0a512 512 0 1 0 512 512A511.721133 511.721133 0 0 0 512 0z m248.191721 585.620915h-260.461874a47.965142 47.965142 0 0 1-47.965141-47.686274V205.525054a47.965142 47.965142 0 1 1 95.651416 0v285.002179h212.775599a47.965142 47.965142 0 0 1 0 95.651416z"  ></path></symbol></svg>',
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
        (o = d.document),
        (i = !1),
        (c = function() {
          i || ((i = !0), n())
        }),
        (a = function() {
          try {
            o.documentElement.doScroll('left')
          } catch (e) {
            return void setTimeout(a, 50)
          }
          c()
        })(),
        (o.onreadystatechange = function() {
          'complete' == o.readyState && ((o.onreadystatechange = null), c())
        }))
    var n, o, i, c, a
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
