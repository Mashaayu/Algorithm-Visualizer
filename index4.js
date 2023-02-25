(this["webpackJsonpalgo-visualizer"] = this["webpackJsonpalgo-visualizer"] || []).push([
	[0], {
		112: function(e, t, n) {},
		114: function(e, t, n) {},
		115: function(e, t, n) {},
		123: function(e, t, n) {},
		124: function(e, t, n) {},
		125: function(e, t, n) {},
		126: function(e, t, n) {},
		127: function(e, t, n) {},
		132: function(e, t) {
			Array.prototype.swap = function(e, t) {
				if (t >= this.length || t < 0) return this;
				var n = this[e];
				return this[e] = this[t], this[t] = n, this
			}, Array.range = function(e) {
				return Array.from(new Array(e), (function(e, t) {
					return t
				}))
			}, Array.matrix = function(e, t) {
				var n = Array.range(t),
					a = Array.range(e);
				return n.map((function(e, t) {
					return a.slice()
				}))
			}
		},
		133: function(e, t, n) {},
		135: function(e, t, n) {},
		138: function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n(1),
				r = n(0),
				s = n.n(r),
				i = n(18),
				c = n.n(i),
				o = (n(112), n(5)),
				l = n(4),
				d = n(7),
				u = n(6),
				h = n(20),
				b = n(21),
				p = n(14),
				j = n.n(p),
				g = n(19),
				f = n(3),
				m = (n(114), function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						Object(o.a)(this, n);
						for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
						return (e = t.call.apply(t, [this].concat(r))).static = {
							row: e.props.row,
							col: e.props.col
						}, e
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							var e = this.props,
								t = e.row,
								n = e.col,
								r = (e.isVisited, e.onMouseDown),
								s = e.onMouseEnter,
								i = e.onMouseUp;
							return Object(a.jsx)("div", {
								id: "node-".concat(this.props.row, "-").concat(this.props.col),
								className: this.getClassName(),
								onMouseDown: function() {
									return r(t, n)
								},
								onMouseEnter: function() {
									return s(t, n)
								},
								onMouseUp: function() {
									return i(t, n)
								}
							})
						}
					}, {
						key: "getClassName",
						value: function() {
							return !0 === this.props.node.isWall ? "node node-wall" : !0 === this.props.node.isStartNode ? "node  node-start" : !0 === this.props.node.isEndNode ? "node  node-end" : this.props.node.ispathNode ? "node node-shortest-path" : !0 === this.props.node.isVisited ? "node  node-visited" : "node"
						}
					}]), n
				}(r.Component)),
				v = (n(115), function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						Object(o.a)(this, n);
						for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
						return (e = t.call.apply(t, [this].concat(r))).state = {
							grid: e.props.grid
						}, e
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							var e = this;
							return Object(a.jsx)("div", {
								className: "Grid",
								children: this.props.grid.map((function(t, n) {
									return Object(a.jsx)("div", {
										children: t.map((function(t, n) {
											var r = t.row,
												s = t.col,
												i = t.isWall,
												c = t.visitedNode;
											return Object(a.jsx)(m, {
												row: r,
												col: s,
												node: t,
												isWall: i,
												visitedNode: c,
												onMouseDown: e.props.onMouseDown,
												onMouseEnter: e.props.onMouseEnter,
												onMouseUp: e.props.onMouseUp
											}, n)
										}))
									}, n)
								}))
							})
						}
					}]), n
				}(r.Component)),
				x = n(13),
				O = n(163),
				y = n(185),
				C = n(186),
				w = n(166),
				k = n(181),
				S = Object(O.a)((function(e) {
					return {
						formControl: {
							margin: e.spacing(1),
							minWidth: 120
						},
						selectEmpty: {
							marginTop: e.spacing(2)
						}
					}
				})),
				N = function(e) {
					var t = S(),
						n = s.a.useState("0"),
						r = Object(x.a)(n, 2),
						i = r[0],
						c = r[1];
					return Object(a.jsx)("div", {
						children: Object(a.jsxs)(w.a, {
							className: t.formControl,
							children: [Object(a.jsx)(y.a, {
								id: "demo-simple-select-label",
								children: "Algorithm"
							}), Object(a.jsx)(k.a, {
								labelId: "demo-simple-select-label",
								id: "demo-simple-select",
								value: i,
								onChange: function(t) {
									c(t.target.value), e.onAlgoChanged(t.target.value)
								},
								children: e.items.map((function(e, t) {
									return Object(a.jsx)(C.a, {
										value: t,
										children: e
									}, t)
								}))
							})]
						})
					})
				},
				R = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("nav", {
								className: "navbar navbar-expand-lg navbar-dark bg-dark",
								children: [Object(a.jsx)("span", {
									className: "navbar-brand",
									children: "Pathfinder"
								}), Object(a.jsx)("button", {
									className: "navbar-toggler",
									type: "button",
									"data-toggle": "collapse",
									"data-target": "#navbarSupportedContent",
									"aria-controls": "navbarSupportedContent",
									"aria-expanded": "false",
									"aria-label": "Toggle navigation",
									children: Object(a.jsx)("span", {
										className: "navbar-toggler-icon"
									})
								}), Object(a.jsx)("div", {
									className: "collapse navbar-collapse",
									id: "navbarSupportedContent",
									children: Object(a.jsx)(h.b, {
										to: "/",
										children: Object(a.jsx)("span", {
											style: {
												color: "white"
											},
											children: "Home"
										})
									})
								})]
							})
						}
					}]), n
				}(r.Component),
				A = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("nav", {
								className: "nav alert-dark",
								children: [Object(a.jsx)(N, {
									onAlgoChanged: this.props.onAlgoChanged,
									items: this.props.algorithms
								}), Object(a.jsx)(N, {
									onAlgoChanged: this.props.onMazeChanged,
									items: this.props.mazes
								}), Object(a.jsx)("button", {
									className: "btn btn-lg btn-secondary m-2",
									onClick: this.props.onCreateMaze,
									children: "Create Maze"
								}), Object(a.jsx)("button", {
									onClick: this.props.onVisualize,
									className: "btn btn-warning btn-lg",
									children: "Visualize"
								}), Object(a.jsx)("button", {
									onClick: this.props.onClearPath,
									className: "btn btn-danger btn-lg m-2",
									children: "Clear Path"
								}), Object(a.jsx)("button", {
									onClick: this.props.onClearBoard,
									className: "btn btn-danger btn-lg m-2",
									children: "Clear Board"
								})]
							})
						}
					}]), n
				}(r.Component),
				M = n(57);

			function T(e, t, n) {
				var a = [];
				t.distance = 0;
				for (var r = function(e) {
						var t, n = [],
							a = Object(M.a)(e);
						try {
							for (a.s(); !(t = a.n()).done;) {
								var r, s = t.value,
									i = Object(M.a)(s);
								try {
									for (i.s(); !(r = i.n()).done;) {
										var c = r.value;
										n.push(c)
									}
								} catch (o) {
									i.e(o)
								} finally {
									i.f()
								}
							}
						} catch (o) {
							a.e(o)
						} finally {
							a.f()
						}
						return n
					}(e); r.length;) {
					z(r);
					var s = r.shift();
					if (!s.isWall) {
						if (s.distance === 1 / 0) return a;
						if (s.isVisited = !0, a.push(s), s === n) return a;
						P(s, e)
					}
				}
			}

			function z(e) {
				e.sort((function(e, t) {
					return e.distance - t.distance
				}))
			}

			function P(e, t) {
				var n, a = function(e, t) {
						var n = [],
							a = e.col,
							r = e.row;
						r > 0 && n.push(t[r - 1][a]);
						r < t.length - 1 && n.push(t[r + 1][a]);
						a > 0 && n.push(t[r][a - 1]);
						a < t[0].length - 1 && n.push(t[r][a + 1]);
						return n.filter((function(e) {
							return !e.isVisited
						}))
					}(e, t),
					r = Object(M.a)(a);
				try {
					for (r.s(); !(n = r.n()).done;) {
						var s = n.value;
						s.distance = e.distance + 1, s.previousNode = e
					}
				} catch (i) {
					r.e(i)
				} finally {
					r.f()
				}
			}

			function D(e, t, n, a, r, s) {
				a - n <= 1 && s - r <= 1 || (s - r > a - n ? function(e, t, n, a, r, s) {
					var i = Math.floor((s + r) / 2),
						c = Math.floor(Math.random() * (a - n + 1)) + n,
						o = n;
					t[n - 1][i].isWall || (c = o, o++);
					var l = a;
					t[a + 1][i].isWall || (c = l, l--);
					for (var d = o; d <= l; d++) d !== c && (t[d][i].isWall = !0, e.push({
						xx: d,
						yy: i
					}));
					D(e, t, n, a, r, i - 1), D(e, t, n, a, i + 1, s)
				}(e, t, n, a, r, s) : function(e, t, n, a, r, s) {
					var i = Math.floor((a + n) / 2),
						c = Math.floor(Math.random() * (s - r + 1)) + r,
						o = r;
					t[i][r - 1].isWall || (c = o, o++);
					var l = s;
					t[i][s + 1].isWall || (c = l, l--);
					for (var d = o; d <= l; d++) d !== c && (t[i][d].isWall = !0, e.push({
						xx: i,
						yy: d
					}));
					D(e, t, n, i - 1, r, s), D(e, t, i + 1, a, r, s)
				}(e, t, n, a, r, s))
			}

			function V(e, t, n, a) {
				var r = [],
					s = [];
				for (s.push(t), r.push(t), t.isVisited = !0; r.length;) {
					var i = "bfs" === a ? r.shift() : r.pop();
					if (s.push(i), i === n) return s;
					"dfs" === a && (i.isVisited = !0);
					var c, o = B(e, i),
						l = Object(M.a)(o);
					try {
						for (l.s(); !(c = l.n()).done;) {
							var d = c.value;
							"bfs" === a && (d.isVisited = !0), d.previousNode = i, r.push(d)
						}
					} catch (u) {
						l.e(u)
					} finally {
						l.f()
					}
				}
				return s
			}

			function B(e, t) {
				var n = [],
					a = t.col,
					r = t.row;
				return a > 0 && n.push(e[r][a - 1]), r > 0 && n.push(e[r - 1][a]), r < e.length - 1 && n.push(e[r + 1][a]), a < e[0].length - 1 && n.push(e[r][a + 1]), n.filter((function(e) {
					return !e.isVisited && !e.isWall
				}))
			}
			var L = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						return Object(o.a)(this, n), (e = t.call(this)).handleMouseDown = function(t, n) {
							if ((e.state.startNode.row !== t || e.state.startNode.col !== n) && (e.state.endNode.row !== t || e.state.endNode.col !== n)) {
								var a = W(e.state.grid, t, n);
								e.setState({
									grid: a
								})
							}
							e.setState({
								mouseIsPressed: !0
							})
						}, e.handleMouseEnter = function(t, n) {
							if (!1 !== e.state.mouseIsPressed && (e.state.startNode.row !== t || e.state.startNode.col !== n) && (e.state.endNode.row !== t || e.state.endNode.col !== n)) {
								var a = W(e.state.grid, t, n);
								e.setState({
									grid: a
								})
							}
						}, e.handleMouseUp = function(t, n) {
							e.setState({
								mouseIsPressed: !1
							})
						}, e.handleAlgoChanged = function(t) {
							e.setState({
								algo: t
							})
						}, e.handleMazeChanged = function(t) {
							e.setState({
								maze: t
							})
						}, e.handleCreateMaze = function() {
							var t;
							switch (e.state.maze) {
								case 1:
									t = function(e, t, n) {
										for (var a = e.slice(), r = [], s = 0; s < t; s++)
											for (var i = 0; i < n; i++)(Math.floor(100 * Math.random()) + 10) % 4 === 0 && (a[s][i].isWall = !0, r.push({
												xx: s,
												yy: i
											}));
										return r
									}(e.state.grid, e.state.row, e.state.col);
									break;
								default:
									t = function(e, t, n) {
										for (var a = [], r = e.slice(), s = 0; s < n; s++) r[0][s].isWall = !0, a.push({
											xx: 0,
											yy: s
										});
										for (var i = 0; i < t; i++) r[i][n - 1].isWall = !0, a.push({
											xx: i,
											yy: n - 1
										});
										for (var c = n - 1; c >= 0; c--) r[t - 1][c].isWall = !0, a.push({
											xx: t - 1,
											yy: c
										});
										for (var o = t - 1; o >= 0; o--) r[o][0].isWall = !0, a.push({
											xx: o,
											yy: 0
										});
										return D(a, r, 1, t - 2, 1, n - 2), a
									}(e.state.grid, e.state.row, e.state.col)
							}
							for (var n = e.state, a = n.startNode, r = n.endNode, s = function(n) {
									setTimeout((function() {
										if (n === t.length - 1) {
											var s = e.state.grid;
											s[a.row][a.col] = Object(f.a)(Object(f.a)({}, s[a.row][a.col]), {}, {
												isWall: !1
											}), s[r.row][r.col] = Object(f.a)(Object(f.a)({}, s[r.row][r.col]), {}, {
												isWall: !1
											}), e.setState({
												grid: s
											})
										}
										t[n].xx === a.row && t[n].yy === a.col || t[n].xx === r.row && t[n].yy === r.col || (document.getElementById("node-".concat(t[n].xx, "-").concat(t[n].yy)).className = "node node-wall")
									}), 20 * n)
								}, i = 0; i < t.length; i++) s(i)
						}, e.handleClearBoard = function() {
							var t = e.state,
								n = t.grid,
								a = t.row,
								r = t.col;
							e.setState({
								grid: E(n, a, r)
							})
						}, e.handleClearPath = function() {
							var t = e.state,
								n = t.grid,
								a = t.row,
								r = t.col;
							e.setState({
								grid: q(n, a, r)
							})
						}, e.handleClick = function() {
							e.visualizeDijkstra()
						}, e.state = {
							grid: [],
							mouseIsPressed: !1,
							algorithms: ["Dijsktra", "BFS", "DFS"],
							algo: 0,
							mazes: ["Recursive division", "Random", "Recursive Horizontal bias(NA)", "Recursive Vertical bias(NA)"],
							maze: 0
						}, e
					}
					return Object(l.a)(n, [{
						key: "componentDidMount",
						value: function() {
							var e = window.innerWidth,
								t = window.innerHeight,
								n = Math.max(Math.floor(t / 25) - 7, 10),
								a = Math.floor(e / 25),
								r = {
									row: 4,
									col: 4
								},
								s = {
									row: n - 5,
									col: a - 5
								},
								i = H(n, a);
							i[r.row][r.col].isStartNode = !0, i[n - 5][a - 5].isEndNode = !0, this.setState({
								grid: i,
								row: n,
								col: a,
								startNode: r,
								endNode: s
							})
						}
					}, {
						key: "render",
						value: function() {
							return Object(a.jsxs)(r.Fragment, {
								children: [Object(a.jsx)(R, {}), Object(a.jsx)(A, {
									onAlgoChanged: this.handleAlgoChanged,
									onVisualize: this.handleClick,
									algorithms: this.state.algorithms,
									mazes: this.state.mazes,
									onMazeChanged: this.handleMazeChanged,
									onCreateMaze: this.handleCreateMaze,
									onClearBoard: this.handleClearBoard,
									onClearPath: this.handleClearPath
								}), Object(a.jsx)("span", {
									style: {
										margin: 2
									}
								}), Object(a.jsx)("div", {
									style: {
										textAlign: "center"
									},
									children: Object(a.jsx)(v, {
										grid: this.state.grid,
										onMouseDown: this.handleMouseDown,
										onMouseEnter: this.handleMouseEnter,
										onMouseUp: this.handleMouseUp
									})
								})]
							})
						}
					}, {
						key: "visualizeDijkstra",
						value: function() {
							var e, t = this.state.grid,
								n = t[this.state.startNode.row][this.state.startNode.col],
								a = t[this.state.endNode.row][this.state.endNode.col];
							switch (this.state.algo) {
								case 0:
									e = T(t, n, a);
									break;
								case 1:
									e = V(t, n, a, "bfs");
									break;
								default:
									e = V(t, n, a, "dfs")
							}
							var r = function(e) {
								for (var t = [], n = e; null !== n;) t.unshift(n), n = n.previousNode;
								return t
							}(a);
							this.animateDijkstra(e, r)
						}
					}, {
						key: "animateDijkstra",
						value: function() {
							var e = Object(g.a)(j.a.mark((function e(t, n) {
								var a, r;
								return j.a.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											a = 0;
										case 1:
											if (!(a <= t.length)) {
												e.next = 16;
												break
											}
											if (a !== t.length) {
												e.next = 8;
												break
											}
											return e.next = 5, G(100);
										case 5:
											return e.next = 7, this.animateShortestPath(n);
										case 7:
											return e.abrupt("return");
										case 8:
											return r = t[a], I(this.state.grid, r.row, r.col), document.getElementById("node-".concat(r.row, "-").concat(r.col)).className = "node node-visited", e.next = 13, G(10);
										case 13:
											a++, e.next = 1;
											break;
										case 16:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(t, n) {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "animateShortestPath",
						value: function() {
							var e = Object(g.a)(j.a.mark((function e(t) {
								var n, a, r, s, i;
								return j.a.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											n = this.state.grid, a = n.slice(), r = 0;
										case 3:
											if (!(r < t.length)) {
												e.next = 14;
												break
											}
											return s = t[r], i = Object(f.a)(Object(f.a)({}, a[s.row][s.col]), {}, {
												ispathNode: !0
											}), a[s.row][s.col] = i, r === t.length - 1 && this.setState({
												grid: a
											}), document.getElementById("node-".concat(s.row, "-").concat(s.col)).className = "node node-shortest-path", e.next = 11, G(50);
										case 11:
											r++, e.next = 3;
											break;
										case 14:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}()
					}]), n
				}(r.Component),
				q = function(e, t, n) {
					for (var a = e.slice(), r = 0; r < t; r++)
						for (var s = 0; s < n; s++) {
							var i = a[r][s],
								c = Object(f.a)(Object(f.a)({}, i), {}, {
									distance: 1 / 0,
									visitedNode: !1,
									isVisited: !1,
									ispathNode: !1,
									previousNode: null
								});
							a[r][s] = c
						}
					return a
				},
				E = function(e, t, n) {
					for (var a = e.slice(), r = 0; r < t; r++)
						for (var s = 0; s < n; s++) {
							var i = a[r][s],
								c = Object(f.a)(Object(f.a)({}, i), {}, {
									isWall: !1,
									distance: 1 / 0,
									visitedNode: !1,
									isVisited: !1,
									ispathNode: !1,
									previousNode: null
								});
							a[r][s] = c
						}
					return a
				},
				I = function(e, t, n) {
					var a = e.slice(),
						r = a[t][n],
						s = Object(f.a)(Object(f.a)({}, r), {}, {
							visitedNode: !r.visitedNode
						});
					return a[t][n] = s, a
				},
				W = function(e, t, n) {
					var a = e.slice(),
						r = a[t][n],
						s = Object(f.a)(Object(f.a)({}, r), {}, {
							isWall: !0
						});
					return a[t][n] = s, a
				},
				H = function(e, t) {
					for (var n = [], a = 0; a < e; a++) {
						for (var r = [], s = 0; s < t; s++) r.push(F(a, s));
						n.push(r)
					}
					return n
				},
				F = function(e, t) {
					return {
						row: e,
						col: t,
						isWall: !1,
						isStartNode: !1,
						isEndNode: !1,
						distance: 1 / 0,
						visitedNode: !1,
						isVisited: !1,
						ispathNode: !1,
						previousNode: null
					}
				};

			function G(e) {
				return new Promise((function(t) {
					return setTimeout(t, e)
				}))
			}
			var U = L,
				_ = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("nav", {
								className: "navbar navbar-expand-lg navbar-dark bg-dark ",
								children: [Object(a.jsx)("a", {
									className: "navbar-brand",
									href: "#",
									children: "Algorithm Visualizer"
								}), Object(a.jsx)("button", {
									className: "navbar-toggler",
									type: "button",
									"data-toggle": "collapse",
									"data-target": "#navbarSupportedContent",
									"aria-controls": "navbarSupportedContent",
									"aria-expanded": "false",
									"aria-label": "Toggle navigation",
									children: Object(a.jsx)("span", {
										className: "navbar-toggler-icon"
									})
								}), Object(a.jsx)("div", {
									className: "collapse navbar-collapse",
									id: "navbarSupportedContent",
									children: Object(a.jsx)("ul", {
										className: "navbar-nav mr-auto",
										children: Object(a.jsx)("li", {
											className: "nav-item active",
											children: Object(a.jsxs)("a", {
												className: "nav-link",
												href: "#",
												children: ["About ", Object(a.jsx)("span", {
													className: "sr-only",
													children: "(current)"
												})]
											})
										})
									})
								})]
							})
						}
					}]), n
				}(r.Component),
				Q = (n(49), function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("div", {
								className: "greet",
								children: [Object(a.jsx)("h1", {
									className: "display-3",
									children: "Algorithm Visualizer"
								}), Object(a.jsx)("hr", {
									className: "dropdown-divider"
								}), Object(a.jsx)("h1", {
									className: "display-5",
									children: "Visualize algorithms for a better understanding"
								})]
							})
						}
					}]), n
				}(r.Component)),
				Y = n(82),
				X = n.n(Y),
				J = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						Object(o.a)(this, n);
						for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
						return (e = t.call.apply(t, [this].concat(r))).state = {}, e
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsx)("div", {
								className: "type display-3",
								children: Object(a.jsx)("span", {
									className: "badge badge-dark",
									children: Object(a.jsx)(X.a, {
										options: {
											strings: ["Graph Algorithms", "Sorting Algorithms", "8 Queen"],
											autoStart: !0,
											loop: !0
										}
									})
								})
							})
						}
					}]), n
				}(r.Component),
				$ = n(9),
				K = n(173),
				Z = n(172),
				ee = n(175),
				te = n(174),
				ne = n(62),
				ae = n.p + "static/media/graph.6e6849d5.png";
			n(187), Object(O.a)({
				card: {
					minWidth: 350,
					maxWidth: 350,
					minHeight: 250,
					borderRadius: 5,
					"&:hover": {
						boxShadow: "0 6px 12px 0 #000000\n                .rotate(-12)\n                .darken(0.2)\n                .fade(0.5)}"
					}
				},
				media: {
					height: 140
				},
				actionArea: {
					padding: 15,
					transition: "0.2s",
					"&:hover": {
						transform: "scale(1.1)"
					}
				}
			});
			var re = n(12),
				se = n(178),
				ie = n(177),
				ce = n(71),
				oe = n.n(ce),
				le = n(176),
				de = Object(O.a)((function(e) {
					return {
						card: {
							minWidth: 350,
							maxWidth: 350,
							minHeight: 200,
							borderRadius: 5,
							"&:hover": {
								boxShadow: "0 6px 12px 0 #000000\n                .rotate(-12)\n                .darken(0.2)\n                .fade(0.5)}"
							}
						},
						media: {
							height: 100
						},
						expand: {
							transform: "rotate(0deg)",
							marginLeft: "auto",
							transition: e.transitions.create("transform", {
								duration: e.transitions.duration.shortest
							})
						},
						expandOpen: {
							transform: "rotate(180deg)"
						},
						actionArea: {
							padding: 15,
							transition: "0.2s",
							"&:hover": {
								transform: "scale(1.1)"
							}
						}
					}
				}));

			function ue(e) {
				var t = de(),
					n = s.a.useState(!1),
					r = Object(x.a)(n, 2),
					i = r[0],
					c = r[1];
				return Object(a.jsx)(Z.a, {
					className: t.actionArea,
					m: 20,
					children: Object(a.jsxs)(K.a, {
						className: t.card,
						children: [Object(a.jsx)(h.b, {
							to: e.card.route,
							children: Object(a.jsx)(te.a, {
								component: "img",
								alt: e.card.title,
								height: "150",
								src: e.card.img
							})
						}), Object(a.jsx)(le.a, {
							title: e.card.title,
							style: {
								backgroundColor: "whitesmoke"
							},
							action: Object(a.jsx)(ie.a, {
								className: Object($.a)(t.expand, Object(re.a)({}, t.expandOpen, i)),
								onClick: function() {
									c(!i)
								},
								"aria-expanded": i,
								"aria-label": "show more",
								children: Object(a.jsx)(oe.a, {})
							})
						}), Object(a.jsx)(se.a, {
							in: i,
							timeout: "auto",
							unmountOnExit: !0,
							children: Object(a.jsx)(ee.a, {
								style: {
									backgroundColor: "whitesmoke"
								},
								children: Object(a.jsx)(ne.a, {
									children: e.card.description
								})
							})
						})]
					})
				})
			}
			var he = n.p + "static/media/primes.72a2f33f.jpg",
				be = n.p + "static/media/sort.117e08fc.png",
				pe = n.p + "static/media/queen.b2332ba3.PNG",
				je = n.p + "static/media/binaryTree.6d8ce938.png",
				ge = n.p + "static/media/convexHull.2720e7cd.png",
				fe = n.p + "static/media/15puzzle.5f6e8f37.PNG",
				me = n.p + "static/media/turing.ab68ef09.jpg",
				ve = n.p + "static/media/Recursion.74bc404c.jpg";
			var xe = n(183),
				Oe = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						Object(o.a)(this, n);
						for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
						return (e = t.call.apply(t, [this].concat(r))).state = {
							cards: [],
							filter: ""
						}, e.getData = function(t) {
							console.log(t.target.value), e.setState({
								filter: t.target.value
							})
						}, e
					}
					return Object(l.a)(n, [{
						key: "componentDidMount",
						value: function() {
							this.setState({
								cards: [{
									id: 1,
									title: "Pathfinder",
									description: "Visualize graph algorithms like dijkstra, BFS, DFS",
									route: "/pathfinder",
									img: ae
								}, {
									id: 2,
									title: "Recursion Tree",
									description: "The process in which a function calls itself directly or indirectly is called recursion. Work in progress",
									route: "/graph",
									img: ve
								}, {
									id: 3,
									title: "Sorting Algorithm",
									description: "Compare different sorting algorithms",
									route: "/sort",
									img: be
								}, {
									id: 4,
									title: "Recursive Sorting",
									description: "Compare different recursive sorting algorithms",
									route: "/recursivesort",
									img: be
								}, {
									id: 5,
									title: "N Queen",
									description: "The N queens puzzle is the problem of placing N chess queens on an N*N chessboard so that no two queens threaten each other",
									route: "/nqueen",
									img: pe
								}, {
									id: 6,
									title: "Turing Machine",
									description: "A Turing machine is a mathematical model of computation that defines an abstract machine that manipulates symbols on a strip of tape according to a table of rules",
									route: "/turing",
									img: me
								}, {
									id: 7,
									title: "Prime Numbers",
									description: "Visualize how Seive is better than brute force",
									route: "/prime",
									img: he
								}, {
									id: 8,
									title: "Convex Hull",
									description: "The convex hull of a set of points is the smallest convex polygon that contains all the points of it",
									route: "/convexhull",
									img: ge
								}, {
									id: 9,
									title: "Binary Search",
									description: "Binary search is an efficient algorithm for finding an item from a sorted list of item",
									route: "/binarysearch",
									img: je
								}, {
									id: 10,
									title: "15 Puzzle",
									description: "The 15 puzzle is a sliding puzzle having 15 square tiles numbered 1\u201315 in a frame that is 4 tiles high and 4 tiles wide, leaving one unoccupied tile position",
									route: "/15puzzle",
									img: fe
								}]
							})
						}
					}, {
						key: "render",
						value: function() {
							var e = this;
							return Object(a.jsxs)(s.a.Fragment, {
								children: [Object(a.jsx)("div", {
									className: "d-flex justify-content-end Cards",
									children: Object(a.jsx)(xe.a, {
										id: "standard-basic",
										label: "Search",
										color: "secondary",
										onChange: this.getData
									})
								}), Object(a.jsx)("div", {
									className: "d-flex flex-wrap justify-content-center Cards p-lg-5",
									children: this.state.cards.filter((function(t) {
										return t.title.toLowerCase().includes(e.state.filter.toLowerCase()) || t.description.toLowerCase().includes(e.state.filter.toLowerCase())
									})).map((function(e) {
										return Object(a.jsx)("div", {
											children: Object(a.jsx)(ue, {
												className: "d-flex flex-wrap",
												card: e
											}, e.id)
										})
									}))
								})]
							})
						}
					}]), n
				}(r.Component),
				ye = n(67),
				Ce = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("footer", {
								class: "page-footer font-small special-color-dark pt-4 ",
								children: [Object(a.jsxs)("div", {
									className: "flex-wrap",
									style: {
										textAlign: "center"
									},
									children: [Object(a.jsx)("div", {
										className: "m-2",
										children: Object(a.jsx)(ye.a, {
											href: "https://github.com/TamimEhsan",
											"data-show-count": "true",
											"aria-label": "Follow @TamimEhsan on GitHub",
											children: "Follow @TamimEhsan"
										})
									}), Object(a.jsx)(ye.a, {
										href: "https://github.com/TamimEhsan/Pathfinder-2.0",
										"data-icon": "octicon-star",
										"data-show-count": "true",
										"aria-label": "Star TamimEhsan/Pathfinder-2.0 on GitHub",
										children: "Star"
									}), "&nbsp", Object(a.jsx)(ye.a, {
										href: "https://github.com/TamimEhsan/Pathfinder-2.0/fork",
										"data-icon": "octicon-repo-forked",
										"data-show-count": "true",
										"aria-label": "Fork TamimEhsan/Pathfinder-2.0 on GitHub",
										children: "Fork"
									}), "&nbsp", Object(a.jsx)("img", {
										src: "https://visitor-badge.laobi.icu/badge?page_id=TamimEhsan.AlgorithmVisualizer",
										alt: "Hits"
									})]
								}), Object(a.jsxs)("div", {
									class: "footer-copyright text-center py-3",
									children: ["\xa9 2020 Copyright:", Object(a.jsx)("a", {
										href: "https://github.com/tamimehsan",
										style: {
											color: "#65b6f0"
										},
										children: " Tamim Ehsan"
									})]
								})]
							})
						}
					}]), n
				}(r.Component),
				we = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)(s.a.Fragment, {
								children: [Object(a.jsx)(_, {}), Object(a.jsx)(Q, {}), Object(a.jsx)(J, {}), Object(a.jsx)(Oe, {}), Object(a.jsx)(Ce, {})]
							})
						}
					}]), n
				}(r.Component),
				ke = (n(123), function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						Object(o.a)(this, n);
						for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
						return (e = t.call.apply(t, [this].concat(r))).getClass = function() {
							var t = e.props.cell,
								n = (t.val, t.isVisiting),
								a = t.isChecking;
							return t.isPrime ? "cell cell-prime bg-success text-light m-2" : n ? "cell cell-visiting m-2" : a ? "cell cell-check m-2" : "cell m-2"
						}, e
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsx)("div", {
								className: this.getClass(),
								children: Object(a.jsx)("span", {
									children: this.props.cell.val
								})
							})
						}
					}]), n
				}(r.Component)),
				Se = (n(124), function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsx)("div", {
								className: "Cells",
								children: this.props.cells.map((function(e, t) {
									return Object(a.jsx)(ke, {
										cell: e
									}, t)
								}))
							})
						}
					}]), n
				}(r.Component)),
				Ne = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("nav", {
								className: "navbar navbar-expand-lg navbar-dark bg-dark",
								children: [Object(a.jsx)("span", {
									className: "navbar-brand",
									children: "Sieve"
								}), Object(a.jsx)("button", {
									className: "navbar-toggler",
									type: "button",
									"data-toggle": "collapse",
									"data-target": "#navbarSupportedContent",
									"aria-controls": "navbarSupportedContent",
									"aria-expanded": "false",
									"aria-label": "Toggle navigation",
									children: Object(a.jsx)("span", {
										className: "navbar-toggler-icon"
									})
								}), Object(a.jsx)("div", {
									className: "collapse navbar-collapse",
									id: "navbarSupportedContent",
									children: Object(a.jsx)(h.b, {
										to: "/",
										children: Object(a.jsx)("span", {
											style: {
												color: "white"
											},
											children: "Home"
										})
									})
								})]
							})
						}
					}]), n
				}(r.Component),
				Re = n(184),
				Ae = Object(O.a)({
					root: {
						width: 300
					}
				});

			function Me(e) {
				return "".concat(e)
			}

			function Te(e) {
				var t, n = Ae();
				return Object(a.jsxs)("div", {
					className: n.root + " ml-2 mr-2",
					children: [Object(a.jsx)(ne.a, {
						id: "discrete-slider",
						gutterBottom: !0,
						children: e.title
					}), Object(a.jsx)(Re.a, (t = {
						defaultValue: e.default,
						getAriaValueText: Me,
						"aria-labelledby": "discrete-slider",
						valueLabelDisplay: "auto",
						onChangeCommitted: function(t) {
							if ("" !== t.target.innerText) {
								var n = parseInt(t.target.innerText, 10);
								e.onChange(n)
							}
						},
						step: e.step,
						marks: e.marks,
						min: e.min,
						max: e.max
					}, Object(re.a)(t, "valueLabelDisplay", "on"), Object(re.a)(t, "disabled", e.isDisabled), t))]
				})
			}
			var ze = Object(O.a)((function(e) {
					return {
						formControl: {
							margin: e.spacing(1),
							minWidth: 120
						},
						selectEmpty: {
							marginTop: e.spacing(2)
						}
					}
				})),
				Pe = function(e) {
					var t = ze(),
						n = s.a.useState("0"),
						r = Object(x.a)(n, 2),
						i = r[0],
						c = r[1],
						o = s.a.useState({
							pos: e.pos
						}),
						l = Object(x.a)(o, 2),
						d = l[0];
					l[1];
					return Object(a.jsx)("div", {
						className: "ml-2 mr-2",
						children: Object(a.jsxs)(w.a, {
							className: t.formControl,
							children: [Object(a.jsx)(y.a, {
								id: "demo-simple-select-label",
								children: "Task"
							}), Object(a.jsxs)(k.a, {
								labelId: "demo-simple-select-label",
								id: "demo-simple-select",
								value: i,
								onChange: function(t) {
									console.log("aa ", t.target.value), c(t.target.value), e.onAlgoChanged(d.pos, t.target.value)
								},
								children: [Object(a.jsx)(C.a, {
									value: 0,
									style: {
										selected: !0
									},
									children: "Seive"
								}), Object(a.jsx)(C.a, {
									value: 1,
									style: {
										selected: !0
									},
									children: "Archimedes Spiral"
								})]
							})]
						})
					})
				},
				De = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						Object(o.a)(this, n);
						for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
						return (e = t.call.apply(t, [this].concat(r))).isClickable = function() {
							return e.props.isDisabled ? {
								cursor: "not-allowed"
							} : {}
						}, e
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("nav", {
								className: "nav alert-dark",
								children: [Object(a.jsx)("button", {
									className: "btn btn-primary btn-lg m-2",
									onClick: this.props.onRefresh,
									disabled: this.props.isDisabled,
									style: this.isClickable(),
									children: "Refresh"
								}), Object(a.jsx)(Pe, {
									pos: 0,
									onAlgoChanged: this.props.setAlgo
								}), Object(a.jsx)(Te, {
									onChange: this.props.onChangeSpeed,
									title: "speed",
									marks: !1,
									default: 10,
									step: 1,
									min: 10,
									max: 50,
									isDisabled: !1
								}), Object(a.jsx)(Te, {
									onChange: this.props.onChangeValues,
									title: "Total Number",
									marks: !1,
									default: 100,
									step: 1,
									min: 10,
									max: 500,
									isDisabled: this.props.isDisabled
								}), Object(a.jsx)("button", {
									className: "btn btn-warning btn-lg m-2",
									onClick: this.props.onVisualize,
									disabled: this.props.isDisabled,
									style: this.isClickable(),
									children: "Visualize"
								})]
							})
						}
					}]), n
				}(r.Component);

			function Ve(e) {
				for (var t = new Array(e + 5).fill(0), n = [], a = 2; a <= e; a++)
					if (0 === t[a]) {
						n.push(a);
						for (var r = a * a; r <= e; r += a) t[r] = 1
					} return n
			}
			var Be = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							var e, t, n = window.innerWidth,
								r = window.innerHeight,
								s = this.props.maxPrime;
							n > r ? e = n / r * (t = s) : t = r / n * (e = s);
							var i = Math.min(e, t) / 300;
							return Object(a.jsx)("div", {
								className: "bg-dark",
								children: Object(a.jsx)("svg", {
									viewBox: "0 0 " + 2 * e + " " + 2 * t,
									xmlns: "http://www.w3.org/2000/svg",
									children: this.props.primes.map((function(n, r) {
										return Object(a.jsx)("circle", {
											id: r,
											cx: n * Math.cos(n) + e,
											cy: n * Math.sin(n) + t,
											r: i,
											stroke: "black",
											"stroke-width": "0.5",
											fill: "#51c4b5"
										})
									}))
								})
							})
						}
					}]), n
				}(r.Component),
				Le = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n(e) {
						var a;
						return Object(o.a)(this, n), (a = t.call(this, e)).state = {
							number: 100,
							cells: [],
							isRunning: !1,
							speed: 500,
							primes: [],
							maxPrime: 0,
							algo: 0
						}, a.setAlgo = function(e, t) {
							0 === e && a.setState({
								algo: t
							})
						}, a.changeSpeed = function(e) {
							a.setState({
								speed: 600 - 10 * e
							})
						}, a.handleValueIncease = function(e) {
							a.setState({
								number: e
							}), 0 === a.state.algo && a.setState({
								cells: We(e),
								isRunning: !1
							})
						}, a.handleRefresh = function() {
							a.setState({
								cells: We(a.state.number),
								isRunning: !1
							})
						}, a.startAlgo = function() {
							console.log(a.state.algo), 0 === a.state.algo ? a.startSeive() : 1 === a.state.algo && a.startSpiral()
						}, a.startSpiral = Object(g.a)(j.a.mark((function e() {
							var t, n, r, s;
							return j.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										t = Ve(100 * a.state.number), n = [], a.setState({
											primes: [],
											maxPrime: t[t.length - 1]
										}), r = Math.ceil(a.state.number / 10), s = 0;
									case 5:
										if (!(s < t.length)) {
											e.next = 14;
											break
										}
										if (n.push(t[s]), s % r !== 0) {
											e.next = 11;
											break
										}
										return a.setState({
											primes: n
										}), e.next = 11, Fe(10);
									case 11:
										s++, e.next = 5;
										break;
									case 14:
										console.log("done");
									case 15:
									case "end":
										return e.stop()
								}
							}), e)
						}))), a.startSeive = Object(g.a)(j.a.mark((function e() {
							var t, n, r, s, i, c;
							return j.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										for (a.state.speed, a.setState({
												isRunning: !0
											}), t = [], n = 0; n <= a.state.number; n++) t.push(1);
										t[0] = t[1] = 0, r = a.state.cells, s = -1, 0, i = 2;
									case 9:
										if (!(i <= a.state.number)) {
											e.next = 33;
											break
										}
										if (1 !== t[i]) {
											e.next = 30;
											break
										}
										return r = qe(r, i - 1), a.setState({
											cells: r
										}), e.next = 15, Fe(a.state.speed);
									case 15:
										c = i * i;
									case 17:
										if (!(c <= a.state.number)) {
											e.next = 30;
											break
										}
										return -1 != s && (r = Ee(r, s)), s = c - 1, r = Ie(r, c - 1), r = Ee(r, s), a.setState({
											cells: r
										}), e.next = 25, Fe(a.state.speed);
									case 25:
										t[c] = 0;
									case 27:
										c += i, e.next = 17;
										break;
									case 30:
										i++, e.next = 9;
										break;
									case 33:
										r = Ee(r, s), a.setState({
											cells: r,
											isRunning: !1
										});
									case 35:
									case "end":
										return e.stop()
								}
							}), e)
						}))), a
					}
					return Object(l.a)(n, [{
						key: "componentDidMount",
						value: function() {
							var e = We(this.state.number);
							this.setState({
								cells: e
							})
						}
					}, {
						key: "render",
						value: function() {
							return Object(a.jsxs)("div", {
								children: [Object(a.jsx)(Ne, {}), Object(a.jsx)(De, {
									onChangeSpeed: this.changeSpeed,
									onChangeValues: this.handleValueIncease,
									onVisualize: this.startAlgo,
									onRefresh: this.handleRefresh,
									isDisabled: this.state.isRunning,
									setAlgo: this.setAlgo
								}), 0 === this.state.algo && Object(a.jsx)(Se, {
									num: this.state.number,
									cells: this.state.cells
								}), 1 === this.state.algo && Object(a.jsx)(Be, {
									num: this.state.number,
									primes: this.state.primes,
									maxPrime: this.state.maxPrime
								})]
							})
						}
					}]), n
				}(r.Component),
				qe = function(e, t) {
					var n = e.slice(),
						a = n[t],
						r = Object(f.a)(Object(f.a)({}, a), {}, {
							isPrime: !0
						});
					return n[t] = r, n
				},
				Ee = function(e, t) {
					var n = e.slice(),
						a = n[t],
						r = Object(f.a)(Object(f.a)({}, a), {}, {
							isVisiting: !a.isVisiting
						});
					return n[t] = r, n
				},
				Ie = function(e, t) {
					var n = e.slice(),
						a = n[t],
						r = Object(f.a)(Object(f.a)({}, a), {}, {
							isChecking: !0
						});
					return n[t] = r, n
				},
				We = function(e) {
					for (var t = [], n = 1; n <= e; n++) t.push(He(n));
					return t
				},
				He = function(e) {
					return {
						val: e,
						isChecking: !1,
						isVisiting: !1,
						isPrime: !1
					}
				};

			function Fe(e) {
				return new Promise((function(t) {
					return setTimeout(t, e)
				}))
			}
			var Ge = Le,
				Ue = (n(125), function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						Object(o.a)(this, n);
						for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
						return (e = t.call.apply(t, [this].concat(r))).checkColor = function() {
							return e.props.rect.isSorted ? "green" : e.props.rect.isSorting ? "red" : "black"
						}, e
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsx)("div", {
								className: "rect",
								style: {
									height: this.props.rect.width,
									background: this.checkColor(),
									margin: this.props.marg,
									"vertical-align": "middle"
								}
							})
						}
					}]), n
				}(r.Component)),
				_e = n(52),
				Qe = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							var e = 5;
							return this.props.rects.length > 50 && (e = 1), Object(a.jsx)("div", {
								children: Object(a.jsx)(_e.a, {
									className: "d-flex justify-content-center align-items-end",
									duration: this.props.speed,
									children: this.props.rects.map((function(t, n) {
										return Object(a.jsx)(Ue, {
											marg: e,
											rect: t
										}, t.kk)
									}))
								})
							})
						}
					}]), n
				}(r.Component);

			function Ye(e) {
				for (var t = [], n = e.length, a = e.slice(), r = 0; r < n - 1; r++) {
					for (var s = r, i = r + 1; i < n; i++) t.push({
						xx: s,
						yy: i,
						changed: !1
					}), a[i].width < a[s].width && (s = i);
					var c = Object(f.a)({}, a[r]),
						o = Object(f.a)({}, a[s]);
					a[s] = c, a[r] = o, t.push({
						xx: s,
						yy: r,
						changed: !0
					}), t.push({
						xx: r,
						yy: r,
						changed: !1
					})
				}
				return t.push({
					xx: n - 1,
					yy: n - 1,
					changed: !1
				}), t
			}

			function Xe(e) {
				for (var t = [], n = e.length, a = e.slice(), r = 0; r < n - 1; r++)
					for (var s = 0; s < n - r - 1; s++) {
						if (a[s].width > a[s + 1].width) {
							var i = Object(f.a)({}, a[s]),
								c = Object(f.a)({}, a[s + 1]);
							a[s + 1] = i, a[s] = c, t.push({
								xx: s,
								yy: s + 1,
								changed: !0
							})
						} else t.push({
							xx: s,
							yy: s + 1,
							changed: !1
						});
						s === n - r - 2 && t.push({
							xx: n - r - 1,
							yy: n - r - 1,
							changed: !1
						})
					}
				return t.push({
					xx: 0,
					yy: 0,
					changed: !1
				}), t
			}

			function Je(e) {
				for (var t = [], n = e.length, a = e.slice(), r = 1; r < n; ++r)
					for (var s = a[r].width, i = r - 1; i >= 0 && a[i].width > s;) {
						var c = Object(f.a)({}, a[i]),
							o = Object(f.a)({}, a[i + 1]);
						a[i + 1] = c, a[i] = o, t.push({
							xx: i,
							yy: i + 1,
							changed: !0
						}), i -= 1
					}
				for (var l = 0; l < n; l++) t.push({
					xx: l,
					yy: l,
					changed: !0
				});
				return t
			}
			var $e = [];

			function Ke(e) {
				var t = e.slice();
				$e = [];
				var n = e.length;
				Ze(t, 0, n -= 1);
				for (var a = 0; a <= n; a++) $e.push({
					xx: a,
					yy: a,
					changed: !0
				});
				return $e
			}

			function Ze(e, t, n) {
				if (!(t >= n)) {
					var a = function(e, t, n) {
						for (var a = e[n].width, r = t - 1, s = t; s <= n - 1; s++)
							if (e[s].width < a && ++r !== s) {
								var i = Object(f.a)({}, e[r]),
									c = Object(f.a)({}, e[s]);
								e[r] = c, e[s] = i, $e.push({
									xx: r,
									yy: s,
									changed: !0
								})
							} if (r + 1 !== n) {
							var o = Object(f.a)({}, e[r + 1]),
								l = Object(f.a)({}, e[n]);
							e[r + 1] = l, e[n] = o, $e.push({
								xx: r + 1,
								yy: n,
								changed: !0
							})
						}
						return r + 1
					}(e, t, n);
					Ze(e, t, a - 1), Ze(e, a + 1, n)
				}
			}
			var et = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("nav", {
								className: "navbar navbar-expand-lg navbar-dark bg-dark",
								children: [Object(a.jsx)("span", {
									className: "navbar-brand",
									children: "Sorting Visualizer"
								}), Object(a.jsx)("button", {
									className: "navbar-toggler",
									type: "button",
									"data-toggle": "collapse",
									"data-target": "#navbarSupportedContent",
									"aria-controls": "navbarSupportedContent",
									"aria-expanded": "false",
									"aria-label": "Toggle navigation",
									children: Object(a.jsx)("span", {
										className: "navbar-toggler-icon"
									})
								}), Object(a.jsx)("div", {
									className: "collapse navbar-collapse",
									id: "navbarSupportedContent",
									children: Object(a.jsx)(h.b, {
										to: "/",
										children: Object(a.jsx)("span", {
											style: {
												color: "white"
											},
											children: "Home"
										})
									})
								})]
							})
						}
					}]), n
				}(r.Component),
				tt = Object(O.a)({
					root: {
						width: 200
					}
				});

			function nt(e) {
				return "".concat(e)
			}

			function at(e) {
				var t, n = tt();
				return Object(a.jsxs)("div", {
					className: n.root + " ml-2 mr-2",
					children: [Object(a.jsx)(Re.a, (t = {
						defaultValue: e.default,
						getAriaValueText: nt,
						"aria-labelledby": "discrete-slider",
						valueLabelDisplay: "auto",
						onChangeCommitted: function(t) {
							if ("" !== t.target.innerText) {
								var n = parseInt(t.target.innerText, 10);
								e.onCountChange(n)
							}
						},
						step: e.step,
						min: e.min,
						max: e.max
					}, Object(re.a)(t, "valueLabelDisplay", "on"), Object(re.a)(t, "disabled", e.disable), t)), Object(a.jsx)(ne.a, {
						id: "discrete-slider",
						gutterBottom: !0,
						children: e.title
					})]
				})
			}
			var rt = Object(O.a)((function(e) {
					return {
						formControl: {
							margin: e.spacing(1),
							minWidth: 120
						},
						selectEmpty: {
							marginTop: e.spacing(2)
						}
					}
				})),
				st = function(e) {
					var t = rt(),
						n = s.a.useState("0"),
						r = Object(x.a)(n, 2),
						i = r[0],
						c = r[1],
						o = s.a.useState({
							pos: e.pos
						}),
						l = Object(x.a)(o, 2),
						d = l[0];
					l[1];
					return Object(a.jsx)("div", {
						className: "ml-2 mr-2",
						children: Object(a.jsxs)(w.a, {
							className: t.formControl,
							children: [Object(a.jsx)(y.a, {
								id: "demo-simple-select-label",
								children: "Algorithm"
							}), Object(a.jsxs)(k.a, {
								labelId: "demo-simple-select-label",
								id: "demo-simple-select",
								value: i,
								onChange: function(t) {
									console.log(d.pos), c(t.target.value), e.onAlgoChanged(d.pos, t.target.value)
								},
								children: [Object(a.jsx)(C.a, {
									value: 0,
									style: {
										selected: !0
									},
									children: "Bubble Sort"
								}), Object(a.jsx)(C.a, {
									value: 1,
									children: "Selection Sort"
								}), Object(a.jsx)(C.a, {
									value: 2,
									children: "Insertion Sort"
								}), Object(a.jsx)(C.a, {
									value: 3,
									children: "Quick Sort"
								})]
							})]
						})
					})
				},
				it = n(10);
			n(182), Object(O.a)((function(e) {
				return {
					root: {
						width: 300 + 2 * e.spacing(3)
					},
					margin: {
						height: e.spacing(3)
					}
				}
			}));
			Object(it.a)({
				root: {
					color: "#3a8589",
					height: 3,
					padding: "13px 0"
				},
				thumb: {
					height: 27,
					width: 27,
					backgroundColor: "#fff",
					border: "1px solid currentColor",
					marginTop: -12,
					marginLeft: -13,
					boxShadow: "#ebebeb 0 2px 2px",
					"&:focus, &:hover, &$active": {
						boxShadow: "#ccc 0 2px 3px 1px"
					},
					"& .bar": {
						height: 9,
						width: 1,
						backgroundColor: "currentColor",
						marginLeft: 1,
						marginRight: 1
					}
				},
				active: {},
				track: {
					height: 3
				},
				rail: {
					color: "#ffffff",
					opacity: 1,
					height: 3
				}
			})(Re.a);
			var ct = Object(O.a)({
					root: {
						width: 200
					}
				}),
				ot = Object(it.a)({
					root: {
						height: 3,
						padding: "13px 0"
					},
					track: {
						height: 4,
						borderRadius: 2
					},
					thumb: {
						backgroundColor: "#fff"
					}
				})(Re.a);

			function lt(e) {
				return "".concat(e)
			}

			function dt(e) {
				var t = ct(),
					n = s.a.useState([20, 37]),
					r = Object(x.a)(n, 2),
					i = r[0],
					c = r[1];
				return Object(a.jsxs)("div", {
					className: t.root,
					children: [Object(a.jsx)(ot, Object(re.a)({
						disabled: e.disable,
						value: i,
						onChange: function(e, t) {
							c(t)
						},
						onChangeCommitted: function(e, t) {
							console.log(t)
						},
						valueLabelDisplay: "auto",
						"aria-labelledby": "range-slider",
						getAriaValueText: lt
					}, "valueLabelDisplay", "off")), Object(a.jsx)(ne.a, {
						id: "range-slider",
						gutterBottom: !0,
						children: "Value range"
					})]
				})
			}
			var ut = n(179),
				ht = n(180),
				bt = n(188);

			function pt(e) {
				var t = s.a.useState({
						checkedA: !1
					}),
					n = Object(x.a)(t, 2),
					r = n[0],
					i = n[1];
				return Object(a.jsx)(ut.a, {
					row: !0,
					children: Object(a.jsx)(ht.a, {
						control: Object(a.jsx)(bt.a, {
							checked: r.checkedA,
							onChange: function(t) {
								i(Object(f.a)(Object(f.a)({}, r), {}, Object(re.a)({}, t.target.name, t.target.checked))), e.onDoubleChange(t.target.checked)
							},
							name: "checkedA"
						}),
						label: "Duo",
						disabled: e.disable
					})
				})
			}
			var jt = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						Object(o.a)(this, n);
						for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
						return (e = t.call.apply(t, [this].concat(r))).isClickable = function() {
							return e.props.disable ? {
								cursor: "not-allowed"
							} : {}
						}, e
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("nav", {
								className: "nav alert-dark",
								children: [Object(a.jsx)("button", {
									className: "btn btn-secondary m-2",
									onClick: this.props.onRandomize,
									disabled: this.props.disable,
									style: this.isClickable(),
									children: "Randomize"
								}), Object(a.jsx)(dt, {
									disable: this.props.disable
								}), Object(a.jsx)(at, {
									default: 20,
									min: 10,
									max: 100,
									step: 10,
									title: "Numbers",
									onCountChange: this.props.onCountChange,
									disable: this.props.disable
								}), Object(a.jsx)(at, {
									default: 50,
									min: 10,
									max: 100,
									step: 1,
									title: "Speed",
									onCountChange: this.props.onSpeedChange,
									disable: !1
								}), Object(a.jsx)(st, {
									pos: 0,
									onAlgoChanged: this.props.onAlgoChanged
								}), Object(a.jsx)(pt, {
									disable: this.props.disable,
									onDoubleChange: this.props.onDoubleChange
								}), Object(a.jsx)(st, {
									pos: 1,
									onAlgoChanged: this.props.onAlgoChanged
								}), Object(a.jsx)("button", {
									className: "btn btn-warning btn-lg ",
									onClick: this.props.onViusalize,
									disabled: this.props.disable,
									style: this.isClickable(),
									children: "Visualize"
								})]
							})
						}
					}]), n
				}(r.Component),
				gt = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						Object(o.a)(this, n);
						for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
						return (e = t.call.apply(t, [this].concat(r))).state = {
							count: 20,
							rects: [],
							rects2: [],
							doubles: !1,
							speed: 50,
							isRunning: !1,
							isRunning1: !1,
							isRunning2: !1,
							algo1: 0,
							algo2: 0
						}, e.handleRandomize = function() {
							var t = mt(e.state.count),
								n = t.slice();
							e.setState({
								rects: t,
								rects2: n
							})
						}, e.handleRefresh = function() {
							for (var t = e.state.rects, n = 0; n < t.length; n++) {
								var a = Object(f.a)(Object(f.a)({}, t[n]), {}, {
									isSorted: !1,
									isSorting: !1
								});
								t[n] = a
							}
							var r = t.slice();
							e.setState({
								rects: t,
								rects2: r
							})
						}, e.handleDouble = function(t) {
							e.setState({
								doubles: t
							})
						}, e.handleCountChange = function(t) {
							e.setState({
								count: t
							}), e.handleRandomize()
						}, e.handleAlgoChanged = function(t, n) {
							0 === t ? e.setState({
								algo1: n
							}) : e.setState({
								algo2: n
							})
						}, e.handleSpeedChanged = function(t) {
							var n = 760 - 7.5 * t;
							e.setState({
								speed: n
							})
						}, e.handleSort = function() {
							var t, n;
							switch (e.setState({
									isRunning: !0
								}), e.state.algo1) {
								case 0:
									t = Xe(e.state.rects);
									break;
								case 1:
									t = Ye(e.state.rects);
									break;
								case 2:
									t = Je(e.state.rects);
									break;
								case 3:
									t = Ke(e.state.rects2), console.log(t);
									break;
								default:
									t = Xe(e.state.rects)
							}
							if (e.state.doubles) switch (e.state.algo2) {
								case 0:
									n = Xe(e.state.rects2);
									break;
								case 1:
									n = Ye(e.state.rects2);
									break;
								case 2:
									n = Je(e.state.rects2);
									break;
								case 3:
									n = Ke(e.state.rects2);
									break;
								default:
									n = Xe(e.state.rects2)
							}
							e.handleFirst(t), e.state.doubles && e.handleSecond(n)
						}, e.handleFirst = function() {
							var t = Object(g.a)(j.a.mark((function t(n) {
								var a, r, s, i;
								return j.a.wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											e.setState({
												isRunning1: !0
											}), a = e.state.rects, r = 0;
										case 3:
											if (!(r < n.length)) {
												t.next = 13;
												break
											}
											return 0 !== r && (a[n[r - 1].xx] = Object(f.a)(Object(f.a)({}, a[n[r - 1].xx]), {}, {
												isSorting: !1
											}), a[n[r - 1].yy] = Object(f.a)(Object(f.a)({}, a[n[r - 1].yy]), {}, {
												isSorting: !1
											})), n[r].xx === n[r].yy ? a[n[r].xx] = Object(f.a)(Object(f.a)({}, a[n[r].xx]), {}, {
												isSorted: !0,
												isSorting: !1
											}) : n[r].changed ? (s = Object(f.a)(Object(f.a)({}, a[n[r].xx]), {}, {
												isSorting: !0
											}), i = Object(f.a)(Object(f.a)({}, a[n[r].yy]), {}, {
												isSorting: !0
											}), a[n[r].yy] = s, a[n[r].xx] = i) : (a[n[r].xx] = Object(f.a)(Object(f.a)({}, a[n[r].xx]), {}, {
												isSorting: !0
											}), a[n[r].yy] = Object(f.a)(Object(f.a)({}, a[n[r].yy]), {}, {
												isSorting: !0
											})), r === n.length - 1 && (e.setState({
												isRunning1: !1
											}), !1 === e.state.isRunning2 && e.setState({
												isRunning: !1
											})), e.setState({
												rects: a
											}), t.next = 10, ft(e.state.speed);
										case 10:
											r++, t.next = 3;
											break;
										case 13:
										case "end":
											return t.stop()
									}
								}), t)
							})));
							return function(e) {
								return t.apply(this, arguments)
							}
						}(), e.handleSecond = function() {
							var t = Object(g.a)(j.a.mark((function t(n) {
								var a, r, s, i;
								return j.a.wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											e.setState({
												isRunning2: !0
											}), a = e.state.rects2, r = 0;
										case 3:
											if (!(r < n.length)) {
												t.next = 13;
												break
											}
											return 0 !== r && (a[n[r - 1].xx] = Object(f.a)(Object(f.a)({}, a[n[r - 1].xx]), {}, {
												isSorting: !1
											}), a[n[r - 1].yy] = Object(f.a)(Object(f.a)({}, a[n[r - 1].yy]), {}, {
												isSorting: !1
											})), n[r].xx === n[r].yy ? a[n[r].xx] = Object(f.a)(Object(f.a)({}, a[n[r].xx]), {}, {
												isSorted: !0,
												isSorting: !1
											}) : n[r].changed ? (s = Object(f.a)(Object(f.a)({}, a[n[r].xx]), {}, {
												isSorting: !0
											}), i = Object(f.a)(Object(f.a)({}, a[n[r].yy]), {}, {
												isSorting: !0
											}), a[n[r].yy] = s, a[n[r].xx] = i) : (a[n[r].xx] = Object(f.a)(Object(f.a)({}, a[n[r].xx]), {}, {
												isSorting: !0
											}), a[n[r].yy] = Object(f.a)(Object(f.a)({}, a[n[r].yy]), {}, {
												isSorting: !0
											})), r === n.length - 1 && (e.setState({
												isRunning2: !1
											}), !1 === e.state.isRunning1 && e.setState({
												isRunning: !1
											})), e.setState({
												rects2: a
											}), t.next = 10, ft(e.state.speed);
										case 10:
											r++, t.next = 3;
											break;
										case 13:
										case "end":
											return t.stop()
									}
								}), t)
							})));
							return function(e) {
								return t.apply(this, arguments)
							}
						}(), e
					}
					return Object(l.a)(n, [{
						key: "componentDidMount",
						value: function() {
							var e = mt(this.state.count),
								t = e.slice();
							this.setState({
								rects: e,
								rects2: t
							})
						}
					}, {
						key: "render",
						value: function() {
							return Object(a.jsxs)(s.a.Fragment, {
								children: [Object(a.jsx)(et, {}), Object(a.jsx)(jt, {
									disable: this.state.isRunning,
									onDoubleChange: this.handleDouble,
									onViusalize: this.handleSort,
									onRandomize: this.handleRandomize,
									onRefresh: this.handleRefresh,
									onCountChange: this.handleCountChange,
									onAlgoChanged: this.handleAlgoChanged,
									onSpeedChange: this.handleSpeedChanged
								}), Object(a.jsxs)("div", {
									className: " justify-content-center",
									children: [Object(a.jsx)(Qe, {
										speed: this.state.speed,
										rects: this.state.rects
									}), this.state.doubles && Object(a.jsx)("hr", {
										style: {
											width: "90%"
										}
									}), this.state.doubles && Object(a.jsx)(Qe, {
										rects: this.state.rects2
									})]
								})]
							})
						}
					}]), n
				}(r.Component);

			function ft(e) {
				return new Promise((function(t) {
					return setTimeout(t, e)
				}))
			}
			var mt = function(e) {
					for (var t = [], n = 0; n < e; n++) t.push(vt(n));
					return t
				},
				vt = function(e) {
					return {
						width: Math.floor(200 * Math.random()) + 50,
						isSorted: !1,
						isSorting: !1,
						kk: e
					}
				},
				xt = gt,
				Ot = (n(81), n.p + "static/media/queen.a967028b.png"),
				yt = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						Object(o.a)(this, n);
						for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
						return (e = t.call.apply(t, [this].concat(r))).getClassName = function() {
							return e.props.cell.isAttacked ? "boardCell attacked" : e.props.cell.isCurrent ? "boardCell current" : e.props.cell.isPresent ? "boardCell present" : e.props.cell.isChecked ? "boardCell checked" : "boardCell"
						}, e.getStyled = function() {
							return (e.props.cell.row + e.props.cell.col) % 2 === 0 ? {
								backgroundColor: "white"
							} : {
								backgroundColor: "grey"
							}
						}, e
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsx)("div", {
								className: this.getClassName(),
								style: this.getStyled(),
								children: this.props.cell.isPresent && Object(a.jsx)("img", {
									src: Ot,
									height: "100px",
									style: {
										padding: "25px"
									}
								})
							})
						}
					}]), n
				}(r.Component),
				Ct = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsx)("div", {
								className: "booard m-5",
								children: this.props.board.map((function(e, t) {
									return Object(a.jsx)("div", {
										children: e.map((function(e, t) {
											return Object(a.jsx)(yt, {
												cell: e
											}, t)
										}))
									}, t)
								}))
							})
						}
					}]), n
				}(r.Component),
				wt = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("nav", {
								className: "navbar navbar-expand-lg navbar-dark bg-dark",
								children: [Object(a.jsx)("span", {
									className: "navbar-brand",
									children: "N Queen"
								}), Object(a.jsx)("button", {
									className: "navbar-toggler",
									type: "button",
									"data-toggle": "collapse",
									"data-target": "#navbarSupportedContent",
									"aria-controls": "navbarSupportedContent",
									"aria-expanded": "false",
									"aria-label": "Toggle navigation",
									children: Object(a.jsx)("span", {
										className: "navbar-toggler-icon"
									})
								}), Object(a.jsx)("div", {
									className: "collapse navbar-collapse",
									id: "navbarSupportedContent",
									children: Object(a.jsx)(h.b, {
										to: "/",
										children: Object(a.jsx)("span", {
											style: {
												color: "white"
											},
											children: "Home"
										})
									})
								})]
							})
						}
					}]), n
				}(r.Component),
				kt = Object(O.a)({
					root: {
						width: 200
					}
				});

			function St(e) {
				return "".concat(e)
			}

			function Nt(e) {
				var t, n = kt();
				return Object(a.jsxs)("div", {
					className: n.root + " ml-2 mr-2",
					children: [Object(a.jsx)(Re.a, (t = {
						defaultValue: e.default,
						getAriaValueText: St,
						"aria-labelledby": "discrete-slider",
						valueLabelDisplay: "auto",
						onChangeCommitted: function(t) {
							if ("" !== t.target.innerText) {
								var n = parseInt(t.target.innerText, 10);
								e.onCountChange(n)
							}
						},
						step: e.step,
						min: e.min,
						max: e.max
					}, Object(re.a)(t, "valueLabelDisplay", "on"), Object(re.a)(t, "disabled", e.disable), t)), Object(a.jsx)(ne.a, {
						id: "discrete-slider",
						gutterBottom: !0,
						children: e.title
					})]
				})
			}
			var Rt = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						Object(o.a)(this, n);
						for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
						return (e = t.call.apply(t, [this].concat(r))).isClickable = function() {
							return e.props.disable ? {
								cursor: "not-allowed"
							} : {}
						}, e
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("nav", {
								className: "nav alert-dark",
								children: [Object(a.jsx)("button", {
									className: "btn btn-secondary m-2",
									onClick: this.props.onClear,
									disabled: this.props.disable,
									style: this.isClickable(),
									children: "Clear Board"
								}), Object(a.jsx)(Nt, {
									default: 4,
									min: 1,
									max: 8,
									step: 1,
									title: "Grid size",
									onCountChange: this.props.onCountChange,
									disable: this.props.disable
								}), Object(a.jsx)(Nt, {
									default: 50,
									min: 1,
									max: 100,
									step: 1,
									title: "Speed",
									onCountChange: this.props.onSpeedChange
								}), Object(a.jsx)("button", {
									className: "btn btn-warning btn-lg ",
									onClick: this.props.onViusalize,
									disabled: this.props.disable,
									style: this.isClickable(),
									children: "Visualize"
								})]
							})
						}
					}]), n
				}(r.Component),
				At = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n(e) {
						var a;
						return Object(o.a)(this, n), (a = t.call(this, e)).state = {
							board: [],
							number: 4,
							speed: 490,
							isRunning: !1
						}, a.handleStop = function() {
							a.setState({
								isRunning: !1
							})
						}, a.handleSpeedChange = function(e) {
							var t = 10 * (100 - e);
							a.setState({
								speed: t
							})
						}, a.handleQueenChange = function(e) {
							a.setState({
								number: e
							});
							var t = Pt(a.state.number);
							a.setState({
								board: t
							})
						}, a.handleClear = function() {
							var e = Pt(a.state.number);
							a.setState({
								board: e
							})
						}, a.handleTurnOff = function() {
							var e = Tt(a.state.board, a.state.number);
							a.setState({
								board: e
							})
						}, a.startAlgo = Object(g.a)(j.a.mark((function e() {
							var t, n;
							return j.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return a.setState({
											isRunning: !0
										}), t = a.state.board.slice(), e.next = 4, a.queensAlgo(t, 0);
									case 4:
										n = Tt(a.state.board, a.state.number), a.setState({
											board: n,
											isRunning: !1
										});
									case 6:
									case "end":
										return e.stop()
								}
							}), e)
						}))), a.queensAlgo = function() {
							var e = Object(g.a)(j.a.mark((function e(t, n) {
								var r, s, i;
								return j.a.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (!(n >= a.state.number)) {
												e.next = 2;
												break
											}
											return e.abrupt("return", !0);
										case 2:
											r = t.slice(), s = 0;
										case 4:
											if (!(s < a.state.number)) {
												e.next = 31;
												break
											}
											return r = Tt(r, a.state.number), i = zt(r, s, n, a.state.number), r = i[0], a.setState({
												board: r
											}), e.next = 11, Mt(a.state.speed);
										case 11:
											if (!i[1]) {
												e.next = 23;
												break
											}
											return e.next = 14, a.queensAlgo(r, n + 1);
										case 14:
											if (!0 !== e.sent) {
												e.next = 17;
												break
											}
											return e.abrupt("return", !0);
										case 17:
											return r[s][n] = Object(f.a)(Object(f.a)({}, r[s][n]), {}, {
												isPresent: !0,
												isCurrent: !0
											}), a.setState({
												board: r
											}), e.next = 21, Mt(a.state.speed);
										case 21:
											r[s][n] = Object(f.a)(Object(f.a)({}, r[s][n]), {}, {
												isPresent: !1,
												isCurrent: !1
											}), a.setState({
												board: r
											});
										case 23:
											return r[s][n] = Object(f.a)(Object(f.a)({}, r[s][n]), {}, {
												isPresent: !1,
												isCurrent: !1
											}), r = Tt(r, a.state.number), a.setState({
												board: r
											}), e.next = 28, Mt(a.state.speed);
										case 28:
											s++, e.next = 4;
											break;
										case 31:
											return e.abrupt("return", !1);
										case 32:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t, n) {
								return e.apply(this, arguments)
							}
						}(), a
					}
					return Object(l.a)(n, [{
						key: "componentDidMount",
						value: function() {
							var e = Pt(this.state.number);
							this.setState({
								board: e
							})
						}
					}, {
						key: "render",
						value: function() {
							return Object(a.jsxs)("div", {
								children: [Object(a.jsx)(wt, {}), Object(a.jsx)(Rt, {
									onSpeedChange: this.handleSpeedChange,
									onCountChange: this.handleQueenChange,
									onViusalize: this.startAlgo,
									disable: this.state.isRunning,
									onClear: this.handleClear,
									onStop: this.handleStop
								}), Object(a.jsx)("div", {
									style: {
										textAlign: "Center"
									},
									children: Object(a.jsx)(Ct, {
										board: this.state.board
									})
								})]
							})
						}
					}]), n
				}(r.Component);

			function Mt(e) {
				return new Promise((function(t) {
					return setTimeout(t, e)
				}))
			}
			var Tt = function(e, t) {
					for (var n = e.slice(), a = 0; a < t; a++)
						for (var r = 0; r < t; r++) n[a][r] = Object(f.a)(Object(f.a)({}, n[a][r]), {}, {
							isChecked: !1,
							isAttacked: !1,
							isCurrent: !1
						});
					return n
				},
				zt = function(e, t, n, a) {
					for (var r = e.slice(), s = !0, i = 0; i < a; i++) r[t][i].isPresent ? (r[t][i] = Object(f.a)(Object(f.a)({}, r[t][i]), {}, {
						isAttacked: !0
					}), s = !1) : r[t][i] = Object(f.a)(Object(f.a)({}, r[t][i]), {}, {
						isChecked: !0
					});
					for (var c = 0; c < a; c++) r[c][n].isPresent ? (r[c][n] = Object(f.a)(Object(f.a)({}, r[c][n]), {}, {
						isAttacked: !0
					}), s = !1) : r[c][n] = Object(f.a)(Object(f.a)({}, r[c][n]), {}, {
						isChecked: !0
					});
					for (var o = t, l = n; o >= 0 && l >= 0; o--, l--) r[o][l].isPresent ? (r[o][l] = Object(f.a)(Object(f.a)({}, r[o][l]), {}, {
						isAttacked: !0
					}), s = !1) : r[o][l] = Object(f.a)(Object(f.a)({}, r[o][l]), {}, {
						isChecked: !0
					});
					for (var d = t, u = n; d < a && u >= 0; d++, u--) r[d][u].isPresent ? (r[d][u] = Object(f.a)(Object(f.a)({}, r[d][u]), {}, {
						isAttacked: !0
					}), s = !1) : r[d][u] = Object(f.a)(Object(f.a)({}, r[d][u]), {}, {
						isChecked: !0
					});
					for (var h = t, b = n; h < a && b < a; h++, b++) r[h][b].isPresent ? (r[h][b] = Object(f.a)(Object(f.a)({}, r[h][b]), {}, {
						isAttacked: !0
					}), s = !1) : r[h][b] = Object(f.a)(Object(f.a)({}, r[h][b]), {}, {
						isChecked: !0
					});
					for (var p = t, j = n; p >= 0 && j < a; p--, j++) r[p][j].isPresent ? (r[p][j] = Object(f.a)(Object(f.a)({}, r[p][j]), {}, {
						isAttacked: !0
					}), s = !1) : r[p][j] = Object(f.a)(Object(f.a)({}, r[p][j]), {}, {
						isChecked: !0
					});
					return r[t][n] = Object(f.a)(Object(f.a)({}, r[t][n]), {}, {
						isPresent: !0,
						isCurrent: !0
					}), [r, s]
				},
				Pt = function(e) {
					for (var t = [], n = 0; n < e; n++) {
						for (var a = [], r = 0; r < e; r++) a.push(Dt(n, r));
						t.push(a)
					}
					return t
				},
				Dt = function(e, t) {
					return {
						row: e,
						col: t,
						isPresent: !1,
						isChecked: !1,
						isAttacked: !1,
						isCurrent: !1
					}
				};

			function Vt(e) {
				return new Promise((function(t) {
					return setTimeout(t, e)
				}))
			}
			r.Component, n(126);

			function Bt(e, t, n) {
				e.xx, t.yy, n.yy, t.xx, n.yy, e.yy, n.xx, e.yy, t.yy;
				return e.xx * (t.yy - n.yy) + t.xx * (n.yy - e.yy) + n.xx * (e.yy - t.yy) < 0
			}

			function Lt(e, t, n) {
				return e.xx * (t.yy - n.yy) + t.xx * (n.yy - e.yy) + n.xx * (e.yy - t.yy) > 0
			}

			function qt(e) {
				return new Promise((function(t) {
					return setTimeout(t, e)
				}))
			}
			var Et = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n(e) {
						var a;
						return Object(o.a)(this, n), (a = t.call(this, e)).state = {
							dots: [],
							lines: [],
							canvasWidth: 300,
							canvasHeight: 100
						}, a.animateLine = Object(g.a)(j.a.mark((function e() {
							var t, n, r, s;
							return j.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										t = a.state.lines, n = a.canvasLineRef.current, (r = n.getContext("2d")).clearRect(0, 0, n.width, n.height), r.fillStyle = "#ffffff", r.strokeStyle = "#ffffff", s = 0;
									case 7:
										if (!(s < t.length)) {
											e.next = 23;
											break
										}
										if (a.props.onGoing) {
											e.next = 11;
											break
										}
										return r.clearRect(0, 0, n.width, n.height), e.abrupt("return");
									case 11:
										return r.beginPath(), t[s].add ? (r.beginPath(), r.lineWidth = 2, r.fillStyle = "black", r.moveTo(t[s].from.xx, t[s].from.yy), r.arc(t[s].from.xx, t[s].from.yy, 14, 0, 2 * Math.PI), r.fill(), r.closePath(), r.beginPath(), r.fillStyle = "red", r.moveTo(t[s].to.xx, t[s].to.yy), r.arc(t[s].to.xx, t[s].to.yy, 14, 0, 2 * Math.PI), r.fill(), r.closePath(), r.beginPath(), r.lineWidth = 2, r.strokeStyle = "#000000") : (r.beginPath(), r.fillStyle = "whitesmoke", r.moveTo(t[s].from.xx, t[s].from.yy), r.arc(t[s].from.xx, t[s].from.yy, 15, 0, 2 * Math.PI), r.fill(), r.closePath(), r.beginPath(), r.fillStyle = "whitesmoke", r.moveTo(t[s].to.xx, t[s].to.yy), r.arc(t[s].to.xx, t[s].to.yy, 15, 0, 2 * Math.PI), r.fill(), r.closePath(), r.lineWidth = 4, r.strokeStyle = "whitesmoke"), r.moveTo(t[s].from.xx, t[s].from.yy), r.lineTo(t[s].to.xx, t[s].to.yy), r.stroke(), r.closePath(), s === t.length - 1 && a.props.onTurnOff(), e.next = 20, qt(a.props.speed);
									case 20:
										s++, e.next = 7;
										break;
									case 23:
									case "end":
										return e.stop()
								}
							}), e)
						}))), a.setState({
							canvasWidth: window.innerWidth
						}), a.setState({
							canvasHeight: window.innerHeight - 10
						}), console.log(window.innerWidth), a.myRef = s.a.createRef(), a.canvasLineRef = s.a.createRef(), a
					}
					return Object(l.a)(n, [{
						key: "componentDidMount",
						value: function() {
							this.redrawDots()
						}
					}, {
						key: "componentDidUpdate",
						value: function(e, t, n) {
							this.props.dots !== e.dots && (this.setState({
								dots: this.props.dots
							}), this.redrawDots()), this.props.onGoing !== e.onGoing && !0 === this.props.onGoing && this.animateLine()
						}
					}, {
						key: "render",
						value: function() {
							return Object(a.jsx)("div", {
								style: {
									textAlign: "center"
								},
								children: Object(a.jsxs)("div", {
									className: "containerz",
									children: [Object(a.jsx)("canvas", {
										className: "canvas",
										id: "canvas1",
										style: {
											backgroundColor: "whitesmoke"
										},
										ref: this.canvasLineRef,
										width: window.innerWidth,
										height: window.innerHeight - 200
									}), Object(a.jsx)("canvas", {
										className: "canvas",
										id: "canvas2",
										ref: this.myRef,
										width: window.innerWidth,
										height: window.innerHeight - 200
									})]
								})
							})
						}
					}, {
						key: "redrawDots",
						value: function() {
							var e = this.myRef.current,
								t = e.getContext("2d");
							t.clearRect(0, 0, e.width, e.height), t.fillStyle = "lightgrey", t.strokeStyle = "black";
							for (var n = 0; n < this.props.dots.length; n++) t.beginPath(), t.arc(this.props.dots[n].xx, this.props.dots[n].yy, 10, 0, 2 * Math.PI), t.fill(), t.lineWidth = 2, t.stroke(), t.closePath();
							t.closePath();
							var a = function(e) {
								if (1 !== e.size) {
									var t = e[0],
										n = e[e.length - 1],
										a = [],
										r = [],
										s = [],
										i = [];
									a.push(t), r.push(t);
									for (var c = 1; c < e.length; c++)
										if (c === e.length - 1 || Bt(t, e[c], n)) {
											for (; a.length >= 2 && !Bt(a[a.length - 2], a[a.length - 1], e[c]);) i.push({
												from: a[a.length - 2],
												to: a[a.length - 1],
												add: !1
											}), a.pop();
											a.push(e[c]), i.push({
												from: a[a.length - 2],
												to: a[a.length - 1],
												add: !0
											})
										} for (var o = 0; o < e.length; o++)
										if (o === e.length - 1 || Lt(t, e[o], n)) {
											for (; r.length >= 2 && !Lt(r[r.length - 2], r[r.length - 1], e[o]);) i.push({
												from: r[r.length - 2],
												to: r[r.length - 1],
												add: !1
											}), r.pop();
											r.push(e[o]), i.push({
												from: r[r.length - 2],
												to: r[r.length - 1],
												add: !0
											})
										} for (var l = 0; l < a.length; l++) s.push(a[l]);
									for (var d = r.length - 2; d > 0; d--) s.push(r[d]);
									return [s, i]
								}
							}(this.props.dots);
							this.canvasLineRef.current.getContext("2d").clearRect(0, 0, e.width, e.height), this.setState({
								lines: a[1]
							})
						}
					}]), n
				}(r.Component),
				It = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("nav", {
								className: "navbar navbar-expand-lg navbar-dark bg-dark",
								children: [Object(a.jsx)("span", {
									className: "navbar-brand",
									children: "Convex Hull"
								}), Object(a.jsx)("button", {
									className: "navbar-toggler",
									type: "button",
									"data-toggle": "collapse",
									"data-target": "#navbarSupportedContent",
									"aria-controls": "navbarSupportedContent",
									"aria-expanded": "false",
									"aria-label": "Toggle navigation",
									children: Object(a.jsx)("span", {
										className: "navbar-toggler-icon"
									})
								}), Object(a.jsx)("div", {
									className: "collapse navbar-collapse",
									id: "navbarSupportedContent",
									children: Object(a.jsx)(h.b, {
										to: "/",
										children: Object(a.jsx)("span", {
											style: {
												color: "white"
											},
											children: "Home"
										})
									})
								})]
							})
						}
					}]), n
				}(r.Component),
				Wt = Object(O.a)({
					root: {
						width: 300
					}
				});

			function Ht(e) {
				return "".concat(e)
			}

			function Ft(e) {
				var t, n = Wt();
				return Object(a.jsxs)("div", {
					className: n.root + " ml-2 mr-2",
					children: [Object(a.jsx)(ne.a, {
						id: "discrete-slider",
						gutterBottom: !0,
						children: e.title
					}), Object(a.jsx)(Re.a, (t = {
						defaultValue: e.default,
						getAriaValueText: Ht,
						"aria-labelledby": "discrete-slider",
						valueLabelDisplay: "auto",
						onChangeCommitted: function(t) {
							if ("" !== t.target.innerText) {
								var n = parseInt(t.target.innerText, 10);
								e.onChange(n)
							}
						},
						step: e.step,
						marks: e.marks,
						min: e.min,
						max: e.max
					}, Object(re.a)(t, "valueLabelDisplay", "on"), Object(re.a)(t, "disabled", e.isDisabled), t))]
				})
			}
			var Gt = function(e) {
				Object(d.a)(n, e);
				var t = Object(u.a)(n);

				function n() {
					var e;
					Object(o.a)(this, n);
					for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
					return (e = t.call.apply(t, [this].concat(r))).isClickable = function() {
						return e.props.isDisabled ? {
							cursor: "not-allowed"
						} : {}
					}, e
				}
				return Object(l.a)(n, [{
					key: "render",
					value: function() {
						return Object(a.jsxs)("nav", {
							className: "nav alert-dark",
							children: [Object(a.jsx)("button", {
								className: "btn btn-primary btn-lg m-2",
								onClick: this.props.onRefresh,
								disabled: this.props.isDisabled,
								style: this.isClickable(),
								children: "Refresh"
							}), Object(a.jsx)(Ft, {
								onChange: this.props.onChangeSpeed,
								title: "speed",
								marks: !1,
								default: 10,
								step: 1,
								min: 10,
								max: 50,
								isDisabled: !1
							}), Object(a.jsx)(Ft, {
								onChange: this.props.onChangeValues,
								title: "Total Number",
								marks: !1,
								default: 50,
								step: 1,
								min: 10,
								max: 200,
								isDisabled: this.props.isDisabled
							}), Object(a.jsx)("button", {
								className: "btn btn-warning btn-lg m-2",
								onClick: this.props.onVisualize,
								disabled: this.props.isDisabled,
								style: this.isClickable(),
								children: "Visualize Graham Scan"
							})]
						})
					}
				}]), n
			}(r.Component);

			function Ut(e) {
				for (var t = [], n = 0; n < e; n++) t.push(_t());
				return t.sort((function(e, t) {
					return e.xx !== t.xx ? e.xx - t.xx : e.yy - t.yy
				})), t
			}

			function _t() {
				var e = window.innerWidth - 50,
					t = window.innerHeight - 250,
					n = Math.floor(Math.random() * t) + 25;
				return {
					xx: Math.floor(Math.random() * e) + 25,
					yy: n
				}
			}
			var Qt = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						return Object(o.a)(this, n), (e = t.call(this)).state = {
							dots: [],
							lines: [],
							isALgoLive: !1,
							width: 100,
							height: 100,
							isRunning: !1,
							speed: 100,
							number: 50
						}, e.handleValueIncease = function(t) {
							e.setState({
								number: t
							}), e.handleRefreshDots()
						}, e.changeSpeed = function(t) {
							e.setState({
								speed: 600 - 10 * t
							})
						}, e.handleAlgoStateChanged = function(t) {
							e.setState({
								isAlgoLive: t
							})
						}, e.handleVisualize = function() {
							e.setState({
								isRunning: !0
							})
						}, e.handleTurnOff = function() {
							e.setState({
								onGoing: !1
							})
						}, e.handleRefreshDots = function() {
							e.setState({
								isRunning: !1
							}), e.setState({
								dots: Ut(e.state.number)
							})
						}, e.handleMoreDot = function() {
							var t = {
									row: Math.floor(400 * Math.random()) + 10,
									col: Math.floor(400 * Math.random()) + 10
								},
								n = e.state.dots;
							n.push(t), e.setState(n)
						}, e.setState({
							width: window.innerWidth,
							height: window.innerHeight - 200
						}), e
					}
					return Object(l.a)(n, [{
						key: "componentDidMount",
						value: function() {
							this.setState({
								width: window.innerWidth,
								height: window.innerHeight - 100
							})
						}
					}, {
						key: "render",
						value: function() {
							return Object(a.jsxs)("div", {
								children: [Object(a.jsx)(It, {}), Object(a.jsx)(Gt, {
									onRefresh: this.handleRefreshDots,
									onVisualize: this.handleVisualize,
									onChangeSpeed: this.changeSpeed,
									onChangeValues: this.handleValueIncease
								}), Object(a.jsx)(Et, {
									width: this.state.width,
									height: this.state.height,
									dots: this.state.dots,
									onTurnOff: this.handleTurnOff,
									onGoing: this.state.isRunning,
									speed: this.state.speed
								})]
							})
						}
					}]), n
				}(r.Component),
				Yt = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						Object(o.a)(this, n);
						for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
						return (e = t.call.apply(t, [this].concat(r))).state = {
							error: !1
						}, e.getData = function(t) {
							"" !== t.target.value ? (console.log(t.target.value), e.props.setUpper(t.target.value)) : e.props.setUpper(100)
						}, e.validateNumbers = function() {}, e
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("div", {
								children: [Object(a.jsx)(xe.a, {
									error: this.state.error,
									id: "standard-error-helper-text",
									label: "Upper Number",
									type: "number",
									variant: "outlined",
									onChange: this.getData
								}), " ", Object(a.jsx)("br", {}), Object(a.jsx)("br", {}), Object(a.jsxs)("h1", {
									children: ["Guess a number between 0 and ", this.props.upper]
								}), Object(a.jsx)("br", {}), Object(a.jsx)("button", {
									className: "btn btn-warning btn-lg",
									onClick: this.props.startGame,
									children: "Start the game"
								})]
							})
						}
					}]), n
				}(r.Component),
				Xt = Object(O.a)({
					root: {
						width: 400
					}
				}),
				Jt = Object(it.a)({
					root: {
						height: 3,
						width: 400,
						padding: "13px 0"
					},
					track: {
						height: 4,
						borderRadius: 2
					},
					thumb: {
						backgroundColor: "#fff"
					}
				})(Re.a);

			function $t(e) {
				return "".concat(e)
			}

			function Kt(e) {
				var t, n = Xt(),
					i = s.a.useState([e.lower, e.upper]),
					c = Object(x.a)(i, 2),
					o = c[0],
					l = c[1];
				return Object(r.useEffect)((function() {
					l([e.lower, e.upper])
				}), [e.lower, e.upper]), Object(a.jsxs)("div", {
					className: n.root,
					children: [Object(a.jsx)(Jt, (t = {
						disabled: !0,
						value: o,
						onChange: function(e, t) {
							l(t)
						},
						onChangeCommitted: function(e, t) {
							console.log(t)
						},
						valueLabelDisplay: "auto",
						"aria-labelledby": "range-slider",
						getAriaValueText: $t
					}, Object(re.a)(t, "valueLabelDisplay", "on"), Object(re.a)(t, "max", e.max), t)), Object(a.jsx)(ne.a, {
						id: "range-slider",
						gutterBottom: !0,
						children: "Binary Search"
					})]
				})
			}
			var Zt = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						Object(o.a)(this, n);
						for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
						return (e = t.call.apply(t, [this].concat(r))).getMid = function() {
							return Math.floor((e.props.upper + e.props.lower) / 2)
						}, e
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("div", {
								children: [Object(a.jsx)("p", {
									children: Object(a.jsx)("button", {
										className: "btn btn-secondary btn-lg",
										type: "button",
										"data-toggle": "collapse",
										"data-target": "#collapseExample",
										"aria-expanded": "false",
										"aria-controls": "collapseExample",
										children: "Toggle Range"
									})
								}), Object(a.jsx)("div", {
									className: "collapse",
									id: "collapseExample",
									children: Object(a.jsx)("div", {
										className: "card card-body",
										children: Object(a.jsx)("center", {
											style: {
												justifyContent: "center"
											},
											children: Object(a.jsx)(Kt, {
												upper: this.props.upper,
												lower: this.props.lower,
												max: this.props.max
											})
										})
									})
								}), Object(a.jsxs)("h1", {
									children: ["Is you number greater than ", this.getMid(), "?"]
								}), " ", Object(a.jsx)("br", {}), Object(a.jsx)("button", {
									className: "btn btn-lg btn-success m-2",
									onClick: this.props.yesButton,
									children: "Yes"
								}), Object(a.jsx)("button", {
									className: "btn btn-lg btn-danger m-2",
									onClick: this.props.noButton,
									children: "No"
								}), " ", Object(a.jsx)("br", {})]
							})
						}
					}]), n
				}(r.Component),
				en = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("div", {
								children: [Object(a.jsxs)("span", {
									className: "display-3",
									children: ["Your number is ", this.props.res]
								}), " ", Object(a.jsx)("br", {}), Object(a.jsx)("button", {
									className: "btn btn-warning btn-lg",
									onClick: this.props.onRestart,
									children: "Restart"
								})]
							})
						}
					}]), n
				}(r.Component),
				tn = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("div", {
								children: [this.props.upper !== this.props.lower && Object(a.jsx)(Zt, {
									yesButton: this.props.yesButton,
									noButton: this.props.noButton,
									upper: this.props.upper,
									lower: this.props.lower,
									max: this.props.max
								}), this.props.upper === this.props.lower && Object(a.jsx)(en, {
									res: this.props.upper,
									onRestart: this.props.onRestart
								})]
							})
						}
					}]), n
				}(r.Component),
				nn = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("nav", {
								className: "navbar navbar-expand-lg navbar-dark bg-dark",
								children: [Object(a.jsx)("span", {
									className: "navbar-brand",
									children: "Binary Search Game"
								}), Object(a.jsx)("button", {
									className: "navbar-toggler",
									type: "button",
									"data-toggle": "collapse",
									"data-target": "#navbarSupportedContent",
									"aria-controls": "navbarSupportedContent",
									"aria-expanded": "false",
									"aria-label": "Toggle navigation",
									children: Object(a.jsx)("span", {
										className: "navbar-toggler-icon"
									})
								}), Object(a.jsx)("div", {
									className: "collapse navbar-collapse",
									id: "navbarSupportedContent",
									children: Object(a.jsx)(h.b, {
										to: "/",
										children: Object(a.jsx)("span", {
											style: {
												color: "white"
											},
											children: "Home"
										})
									})
								})]
							})
						}
					}]), n
				}(r.Component),
				an = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						Object(o.a)(this, n);
						for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
						return (e = t.call.apply(t, [this].concat(r))).state = {
							upper: 100,
							lower: 0,
							max: 100,
							isRunning: !1
						}, e.handleStartGame = function() {
							e.setState({
								isRunning: !0
							})
						}, e.handleRestart = function() {
							e.setState({
								isRunning: !1,
								upper: 100,
								lower: 0
							})
						}, e.handleYes = function() {
							var t = Math.floor((e.state.upper + e.state.lower) / 2);
							e.setState({
								lower: t + 1
							})
						}, e.handleNo = function() {
							var t = Math.floor((e.state.upper + e.state.lower) / 2);
							e.setState({
								upper: t
							})
						}, e.handleSetUpper = function(t) {
							var n = parseInt(t);
							n <= 0 && (n = 100), e.setState({
								upper: n,
								max: n
							})
						}, e
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("div", {
								children: [Object(a.jsx)(nn, {}), Object(a.jsx)("br", {}), Object(a.jsx)("br", {}), Object(a.jsx)("br", {}), Object(a.jsxs)("center", {
									children: [!this.state.isRunning && Object(a.jsx)(Yt, {
										startGame: this.handleStartGame,
										upper: this.state.upper,
										setUpper: this.handleSetUpper
									}), this.state.isRunning && Object(a.jsx)(tn, {
										yesButton: this.handleYes,
										noButton: this.handleNo,
										upper: this.state.upper,
										lower: this.state.lower,
										max: this.state.max,
										onRestart: this.handleRestart
									})]
								})]
							})
						}
					}]), n
				}(r.Component),
				rn = (n(127), function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						Object(o.a)(this, n);
						for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
						return (e = t.call.apply(t, [this].concat(r))).checkColor = function() {
							return e.props.rect.isSorted ? "green" : e.props.rect.isSorting ? "orange" : e.props.rect.isLeft ? "red" : e.props.rect.isRight ? "purple" : "#ADD8E6"
						}, e.checkBorder = function() {
							return e.props.rect.isRange ? "0px solid black" : "0px"
						}, e
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsx)("div", {
								className: "rect",
								style: {
									height: this.props.rect.width,
									border: this.checkBorder(),
									background: this.checkColor(),
									margin: this.props.marg
								}
							})
						}
					}]), n
				}(r.Component)),
				sn = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							var e = 5;
							return this.props.rects.length > 50 && (e = 1), Object(a.jsx)("div", {
								className: "d-flex justify-content-center align-items-end",
								children: this.props.rects.map((function(t, n) {
									return Object(a.jsx)(rn, {
										marg: e,
										rect: t
									}, n)
								}))
							})
						}
					}]), n
				}(r.Component),
				cn = [];

			function on(e) {
				var t = e.slice();
				cn = [];
				var n = e.length;
				return ln(t, 0, n -= 1), cn
			}

			function ln(e, t, n) {
				if (!(t >= n)) {
					var a = t + (n - t) / 2;
					ln(e, t, a = Math.floor(a)), ln(e, a + 1, n),
						function(e, t, n, a) {
							for (var r = n - t + 1, s = a - n, i = e.slice(t, n + 1), c = e.slice(n + 1, a + 1), o = 0, l = 0, d = t; o < r && l < s;) i[o].width <= c[l].width ? (e[d] = i[o], o++) : (e[d] = c[l], l++), d++;
							for (; o < r;) e[d] = i[o], o++, d++;
							for (; l < s;) e[d] = c[l], l++, d++
						}(e, t, a, n);
					var r = {
						left: t,
						right: n,
						mid: a,
						val: e.slice(t, n + 1)
					};
					cn.push(r)
				}
			}
			var dn = [];

			function un(e) {
				var t = e.slice();
				return dn = [],
					function(e, t) {
						for (var n = Math.floor(t / 2) - 1; n >= 0; n--) hn(e, t, n);
						for (var a = t - 1; a > 0; a--) {
							var r = e[a];
							e[a] = e[0], e[0] = r;
							var s = {
								left: a,
								right: 0,
								sorted: !0
							};
							dn.push(s), hn(e, a, 0)
						}
					}(t, e.length), dn
			}

			function hn(e, t, n) {
				var a = n,
					r = 2 * n + 1,
					s = 2 * n + 2;
				if (r < t && e[r].width > e[a].width && (a = r), s < t && e[s].width > e[a].width && (a = s), a != n) {
					var i = e[n];
					e[n] = e[a], e[a] = i;
					var c = {
						left: n,
						right: a,
						sorted: !1
					};
					dn.push(c), hn(e, t, a)
				}
			}
			var bn = [];

			function pn(e) {
				var t = e.slice();
				bn = [];
				var n = e.length;
				return jn(t, 0, n -= 1), bn
			}

			function jn(e, t, n) {
				if (!(t >= n)) {
					var a = function(e, t, n) {
						bn.push({
							left: t,
							right: n,
							swap: !1,
							changedRange: !0
						});
						for (var a = e[n].width, r = t - 1, s = t; s <= n - 1; s++)
							if (e[s].width < a && ++r !== s) {
								var i = Object(f.a)({}, e[r]),
									c = Object(f.a)({}, e[s]);
								e[r] = c, e[s] = i, bn.push({
									left: r,
									right: s,
									swap: !0,
									changedRange: !1
								})
							} if (r + 1 !== n) {
							var o = Object(f.a)({}, e[r + 1]),
								l = Object(f.a)({}, e[n]);
							e[r + 1] = l, e[n] = o, bn.push({
								left: r + 1,
								right: n,
								swap: !0,
								changedRange: !1
							})
						}
						return r + 1
					}(e, t, n);
					jn(e, t, a - 1), jn(e, a + 1, n)
				}
			}
			var gn = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("nav", {
								className: "navbar navbar-expand-lg navbar-dark bg-dark",
								children: [Object(a.jsx)("span", {
									className: "navbar-brand",
									children: "Recursive Sorting Visualizer"
								}), Object(a.jsx)("button", {
									className: "navbar-toggler",
									type: "button",
									"data-toggle": "collapse",
									"data-target": "#navbarSupportedContent",
									"aria-controls": "navbarSupportedContent",
									"aria-expanded": "false",
									"aria-label": "Toggle navigation",
									children: Object(a.jsx)("span", {
										className: "navbar-toggler-icon"
									})
								}), Object(a.jsx)("div", {
									className: "collapse navbar-collapse",
									id: "navbarSupportedContent",
									children: Object(a.jsx)(h.b, {
										to: "/",
										children: Object(a.jsx)("span", {
											style: {
												color: "white"
											},
											children: "Home"
										})
									})
								})]
							})
						}
					}]), n
				}(r.Component),
				fn = Object(O.a)({
					root: {
						width: 200
					}
				});

			function mn(e) {
				return "".concat(e)
			}

			function vn(e) {
				var t, n = fn();
				return Object(a.jsxs)("div", {
					className: n.root + " ml-2 mr-2",
					children: [Object(a.jsx)(Re.a, (t = {
						defaultValue: e.default,
						getAriaValueText: mn,
						"aria-labelledby": "discrete-slider",
						valueLabelDisplay: "auto",
						onChangeCommitted: function(t) {
							if ("" !== t.target.innerText) {
								var n = parseInt(t.target.innerText, 10);
								e.onCountChange(n)
							}
						},
						step: e.step,
						min: e.min,
						max: e.max
					}, Object(re.a)(t, "valueLabelDisplay", "on"), Object(re.a)(t, "disabled", e.disable), t)), Object(a.jsx)(ne.a, {
						id: "discrete-slider",
						gutterBottom: !0,
						children: e.title
					})]
				})
			}
			var xn = Object(O.a)((function(e) {
					return {
						formControl: {
							margin: e.spacing(1),
							minWidth: 120
						},
						selectEmpty: {
							marginTop: e.spacing(2)
						}
					}
				})),
				On = function(e) {
					var t = xn(),
						n = s.a.useState("0"),
						r = Object(x.a)(n, 2),
						i = r[0],
						c = r[1],
						o = s.a.useState({
							pos: e.pos
						}),
						l = Object(x.a)(o, 2),
						d = l[0];
					l[1];
					return Object(a.jsx)("div", {
						className: "ml-2 mr-2",
						children: Object(a.jsxs)(w.a, {
							className: t.formControl,
							children: [Object(a.jsx)(y.a, {
								id: "demo-simple-select-label",
								children: "Algorithm"
							}), Object(a.jsxs)(k.a, {
								labelId: "demo-simple-select-label",
								id: "demo-simple-select",
								value: i,
								onChange: function(t) {
									console.log(d.pos), c(t.target.value), e.onAlgoChanged(d.pos, t.target.value)
								},
								children: [Object(a.jsx)(C.a, {
									value: 0,
									style: {
										selected: !0
									},
									children: "Merge Sort"
								}), Object(a.jsx)(C.a, {
									value: 1,
									style: {
										selected: !0
									},
									children: "Heap Sort"
								}), Object(a.jsx)(C.a, {
									value: 2,
									style: {
										selected: !0
									},
									children: "Quick Sort"
								})]
							})]
						})
					})
				};
			Object(O.a)((function(e) {
				return {
					root: {
						width: 300 + 2 * e.spacing(3)
					},
					margin: {
						height: e.spacing(3)
					}
				}
			}));
			Object(it.a)({
				root: {
					color: "#3a8589",
					height: 3,
					padding: "13px 0"
				},
				thumb: {
					height: 27,
					width: 27,
					backgroundColor: "#fff",
					border: "1px solid currentColor",
					marginTop: -12,
					marginLeft: -13,
					boxShadow: "#ebebeb 0 2px 2px",
					"&:focus, &:hover, &$active": {
						boxShadow: "#ccc 0 2px 3px 1px"
					},
					"& .bar": {
						height: 9,
						width: 1,
						backgroundColor: "currentColor",
						marginLeft: 1,
						marginRight: 1
					}
				},
				active: {},
				track: {
					height: 3
				},
				rail: {
					color: "#ffffff",
					opacity: 1,
					height: 3
				}
			})(Re.a);
			var yn = Object(O.a)({
					root: {
						width: 200
					}
				}),
				Cn = Object(it.a)({
					root: {
						height: 3,
						padding: "13px 0"
					},
					track: {
						height: 4,
						borderRadius: 2
					},
					thumb: {
						backgroundColor: "#fff"
					}
				})(Re.a);

			function wn(e) {
				return "".concat(e)
			}

			function kn(e) {
				var t = yn(),
					n = s.a.useState([20, 37]),
					r = Object(x.a)(n, 2),
					i = r[0],
					c = r[1];
				return Object(a.jsxs)("div", {
					className: t.root,
					children: [Object(a.jsx)(Cn, Object(re.a)({
						disabled: e.disable,
						value: i,
						onChange: function(e, t) {
							c(t)
						},
						onChangeCommitted: function(e, t) {
							console.log(t)
						},
						valueLabelDisplay: "auto",
						"aria-labelledby": "range-slider",
						getAriaValueText: wn
					}, "valueLabelDisplay", "off")), Object(a.jsx)(ne.a, {
						id: "range-slider",
						gutterBottom: !0,
						children: "Value range"
					})]
				})
			}
			var Sn = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						Object(o.a)(this, n);
						for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
						return (e = t.call.apply(t, [this].concat(r))).isClickable = function() {
							return e.props.disable ? {
								cursor: "not-allowed"
							} : {}
						}, e
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("nav", {
								className: "nav alert-dark",
								children: [Object(a.jsx)("button", {
									className: "btn btn-secondary m-2",
									onClick: this.props.onRandomize,
									disabled: this.props.disable,
									style: this.isClickable(),
									children: "Randomize"
								}), Object(a.jsx)(kn, {
									disable: this.props.disable
								}), Object(a.jsx)(vn, {
									default: 20,
									min: 10,
									max: 100,
									step: 10,
									title: "Numbers",
									onCountChange: this.props.onCountChange,
									disable: this.props.disable
								}), Object(a.jsx)(vn, {
									default: 50,
									min: 10,
									max: 100,
									step: 1,
									title: "Speed",
									onCountChange: this.props.onSpeedChange,
									disable: !1
								}), Object(a.jsx)(On, {
									pos: 0,
									onAlgoChanged: this.props.onAlgoChanged
								}), Object(a.jsx)("button", {
									className: "btn btn-warning btn-lg ",
									onClick: this.props.onViusalize,
									disabled: this.props.disable,
									style: this.isClickable(),
									children: "Visualize"
								})]
							})
						}
					}]), n
				}(r.Component),
				Nn = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						return Object(o.a)(this, n), (e = t.call(this)).state = {
							count: 20,
							rects: [],
							speed: 50,
							isRunning: !1,
							algo: 0
						}, e.handleRandomize = function() {
							var t = An(e.state.count);
							e.setState({
								rects: t
							})
						}, e.handleRefresh = function() {
							for (var t = e.state.rects, n = 0; n < t.length; n++) {
								var a = Object(f.a)(Object(f.a)({}, t[n]), {}, {
									isSorted: !1,
									isSorting: !1
								});
								t[n] = a
							}
							e.setState({
								rects: t
							})
						}, e.handleCountChange = function(t) {
							e.setState({
								count: t
							}), e.handleRandomize()
						}, e.handleAlgoChanged = function(t, n) {
							0 === t && e.setState({
								algo: n
							})
						}, e.handleSpeedChanged = function(t) {
							var n = 110 - t;
							e.setState({
								speed: n
							})
						}, e.handleSort = function() {
							var t;
							switch (e.setState({
									isRunning: !0
								}), e.state.algo) {
								case 0:
									t = on(e.state.rects), e.handleMerge(t);
									break;
								case 1:
									t = un(e.state.rects.slice()), e.handleHeap(t);
									break;
								case 2:
									t = pn(e.state.rects.slice()), e.handleQuick(t)
							}
						}, e.handleQuick = function() {
							var t = Object(g.a)(j.a.mark((function t(n) {
								var a, r, s, i, c, o, l, d, u, h, b, p, g, m, v, x, O, y, C;
								return j.a.wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											for (e.setState({
													isRunning: !0
												}), a = e.state.rects, r = 0; r < e.state.count; r++) a[r] = Object(f.a)(Object(f.a)({}, a[r]), {}, {
												isLeft: !1,
												isSorting: !1,
												isRight: !1,
												isRange: !1,
												isSorted: !1
											});
											e.setState({
												rects: a
											}), s = -1, c = 0;
										case 6:
											if (!(c < n.length)) {
												t.next = 53;
												break
											}
											if (o = n[c], -1 !== s && (d = (l = i).left, u = l.right, a[d] = Object(f.a)(Object(f.a)({}, a[d]), {}, {
													isLeft: !1,
													isSorting: !1,
													isRight: !1,
													isRange: !1
												}), a[u] = Object(f.a)(Object(f.a)({}, a[u]), {}, {
													isLeft: !1,
													isSorting: !1,
													isRight: !1,
													isRange: !1
												})), !o.changedRange) {
												t.next = 33;
												break
											}
											return t.next = 12, Rn(e.state.speed);
										case 12:
											return t.next = 14, Rn(e.state.speed);
										case 14:
											return t.next = 16, Rn(e.state.speed);
										case 16:
											return t.next = 18, Rn(e.state.speed);
										case 18:
											for (h = o.left, b = o.right, p = 0; p < e.state.count; p++) a[p] = Object(f.a)(Object(f.a)({}, a[p]), {}, {
												isLeft: !1,
												isSorting: !1,
												isRight: !1,
												isRange: !1
											});
											for (g = h; g <= b; g++) a[g] = Object(f.a)(Object(f.a)({}, a[g]), {}, {
												isLeft: !1,
												isSorting: !1,
												isRight: !0,
												isRange: !0
											});
											return e.setState({
												rects: a
											}), t.next = 24, Rn(e.state.speed);
										case 24:
											return t.next = 26, Rn(e.state.speed);
										case 26:
											return t.next = 28, Rn(e.state.speed);
										case 28:
											return t.next = 30, Rn(e.state.speed);
										case 30:
											for (m = 0; m < e.state.count; m++) a[m] = Object(f.a)(Object(f.a)({}, a[m]), {}, {
												isLeft: !1,
												isSorting: !1,
												isRight: !1
											});
											t.next = 34;
											break;
										case 33:
											o.swap && (v = o.left, x = o.right, a[v] = Object(f.a)(Object(f.a)({}, a[v]), {}, {
												isLeft: !1,
												isSorting: !0,
												isRight: !1,
												isRange: !1
											}), a[x] = Object(f.a)(Object(f.a)({}, a[x]), {}, {
												isLeft: !0,
												isSorting: !1,
												isRight: !1,
												isRange: !1
											}), O = a[v], a[v] = a[x], a[x] = O, s = 1, i = o);
										case 34:
											return e.setState({
												rects: a
											}), t.next = 37, Rn(e.state.speed);
										case 37:
											if (c !== n.length - 1) {
												t.next = 50;
												break
											}
											for (y = 0; y < e.state.count; y++) a[y] = Object(f.a)(Object(f.a)({}, a[y]), {}, {
												isLeft: !1,
												isSorting: !1,
												isRight: !1,
												isSorted: !1,
												isRange: !1
											});
											e.setState({
												rects: a
											}), C = 0;
										case 41:
											if (!(C < e.state.count)) {
												t.next = 49;
												break
											}
											return a[C] = Object(f.a)(Object(f.a)({}, a[C]), {}, {
												isLeft: !1,
												isSorting: !1,
												isRight: !1,
												isSorted: !0,
												isRange: !1
											}), e.setState({
												rects: a
											}), t.next = 46, Rn(10);
										case 46:
											C++, t.next = 41;
											break;
										case 49:
											e.setState({
												isRunning: !1,
												rects: a
											});
										case 50:
											c++, t.next = 6;
											break;
										case 53:
										case "end":
											return t.stop()
									}
								}), t)
							})));
							return function(e) {
								return t.apply(this, arguments)
							}
						}(), e.handleHeap = function() {
							var t = Object(g.a)(j.a.mark((function t(n) {
								var a, r, s, i, c, o, l, d, u, h;
								return j.a.wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											for (e.setState({
													isRunning: !0
												}), a = e.state.rects, r = 0; r < e.state.count; r++) a[r] = Object(f.a)(Object(f.a)({}, a[r]), {}, {
												isLeft: !1,
												isSorting: !1,
												isRight: !1,
												isRange: !1,
												isSorted: !1
											});
											e.setState({
												rects: a
											}), s = 0;
										case 5:
											if (!(s < n.length)) {
												t.next = 39;
												break
											}
											for (i = n[s], c = 0; c < e.state.count; c++) a[c] = Object(f.a)(Object(f.a)({}, a[c]), {}, {
												isLeft: !1,
												isSorting: !1,
												isRight: !1
											});
											return o = i.left, l = i.right, d = i.sorted, a[o] = Object(f.a)(Object(f.a)({}, a[o]), {}, {
												isLeft: !0
											}), a[l] = Object(f.a)(Object(f.a)({}, a[l]), {}, {
												isRight: !0
											}), e.setState({
												rects: a
											}), t.next = 14, Rn(e.state.speed);
										case 14:
											return u = a[o], a[o] = a[l], a[l] = u, e.setState({
												rects: a
											}), d && (a[o] = Object(f.a)(Object(f.a)({}, a[o]), {}, {
												isSorted: !0
											})), t.next = 21, Rn(e.state.speed);
										case 21:
											return t.next = 23, Rn(e.state.speed);
										case 23:
											return t.next = 25, Rn(e.state.speed);
										case 25:
											if (s !== n.length - 1) {
												t.next = 36;
												break
											}
											h = 0;
										case 27:
											if (!(h < e.state.count)) {
												t.next = 35;
												break
											}
											return a[h] = Object(f.a)(Object(f.a)({}, a[h]), {}, {
												isLeft: !1,
												isSorting: !1,
												isRight: !1,
												isSorted: !0
											}), e.setState({
												rects: a
											}), t.next = 32, Rn(e.state.speed);
										case 32:
											h++, t.next = 27;
											break;
										case 35:
											e.setState({
												isRunning: !1,
												rects: a
											});
										case 36:
											s++, t.next = 5;
											break;
										case 39:
										case "end":
											return t.stop()
									}
								}), t)
							})));
							return function(e) {
								return t.apply(this, arguments)
							}
						}(), e.handleMerge = function() {
							var t = Object(g.a)(j.a.mark((function t(n) {
								var a, r, s, i, c, o, l, d, u;
								return j.a.wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											for (e.setState({
													isRunning1: !0
												}), e.state.speed, a = e.state.rects, r = 0; r < e.state.count; r++) a[r] = Object(f.a)(Object(f.a)({}, a[r]), {}, {
												isLeft: !1,
												isSorting: !1,
												isRight: !1,
												isRange: !1,
												isSorted: !1
											});
											return e.setState({
												rects: a
											}), t.next = 7, Rn(e.state.speed);
										case 7:
											s = 0;
										case 8:
											if (!(s < n.length)) {
												t.next = 48;
												break
											}
											for (i = n[s], c = 0; c < e.state.count; c++) a[c] = Object(f.a)(Object(f.a)({}, a[c]), {}, {
												isLeft: !1,
												isSorting: !1,
												isRight: !1
											});
											for (o = i.left; o <= i.mid; o++) a[o] = Object(f.a)(Object(f.a)({}, a[o]), {}, {
												isLeft: !0,
												isSorting: !1
											});
											for (l = i.mid + 1; l <= i.right; l++) a[l] = Object(f.a)(Object(f.a)({}, a[l]), {}, {
												isRight: !0,
												isLeft: !1,
												isSorting: !1
											});
											return e.setState({
												rects: a
											}), t.next = 16, Rn(e.state.speed);
										case 16:
											return t.next = 18, Rn(e.state.speed);
										case 18:
											return t.next = 20, Rn(e.state.speed);
										case 20:
											d = i.left;
										case 21:
											if (!(d <= i.right)) {
												t.next = 29;
												break
											}
											return a[d] = Object(f.a)(Object(f.a)({}, a[d]), {}, {
												width: i.val[d - i.left].width,
												isSorting: !0
											}), e.setState({
												rects: a
											}), t.next = 26, Rn(e.state.speed);
										case 26:
											d++, t.next = 21;
											break;
										case 29:
											if (s !== n.length - 1) {
												t.next = 40;
												break
											}
											u = 0;
										case 31:
											if (!(u < e.state.count)) {
												t.next = 39;
												break
											}
											return a[u] = Object(f.a)(Object(f.a)({}, a[u]), {}, {
												isLeft: !1,
												isSorting: !1,
												isRight: !1,
												isSorted: !0
											}), e.setState({
												rects: a
											}), t.next = 36, Rn(e.state.speed);
										case 36:
											u++, t.next = 31;
											break;
										case 39:
											e.setState({
												isRunning: !1
											});
										case 40:
											return e.setState({
												rects: a
											}), t.next = 43, Rn(e.state.speed);
										case 43:
											a = e.state.rects, e.setState({
												rects: a
											});
										case 45:
											s++, t.next = 8;
											break;
										case 48:
										case "end":
											return t.stop()
									}
								}), t)
							})));
							return function(e) {
								return t.apply(this, arguments)
							}
						}(), e
					}
					return Object(l.a)(n, [{
						key: "componentDidMount",
						value: function() {
							var e = An(this.state.count);
							this.setState({
								rects: e
							})
						}
					}, {
						key: "render",
						value: function() {
							return Object(a.jsxs)(s.a.Fragment, {
								children: [Object(a.jsx)(gn, {}), Object(a.jsx)(Sn, {
									disable: this.state.isRunning,
									onViusalize: this.handleSort,
									onRandomize: this.handleRandomize,
									onRefresh: this.handleRefresh,
									onCountChange: this.handleCountChange,
									onAlgoChanged: this.handleAlgoChanged,
									onSpeedChange: this.handleSpeedChanged
								}), Object(a.jsx)("div", {
									className: " justify-content-center",
									children: Object(a.jsx)(sn, {
										rects: this.state.rects
									})
								})]
							})
						}
					}]), n
				}(r.Component);

			function Rn(e) {
				return new Promise((function(t) {
					return setTimeout(t, e)
				}))
			}
			var An = function(e) {
					for (var t = [], n = 0; n < e; n++) t.push(Mn());
					return t
				},
				Mn = function() {
					return {
						width: Math.floor(200 * Math.random()) + 50,
						isSorted: !1,
						isSorting: !1,
						isLeft: !1,
						isRight: !1
					}
				},
				Tn = Nn,
				zn = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("nav", {
								className: "navbar navbar-expand-lg navbar-dark bg-dark",
								children: [Object(a.jsx)("span", {
									className: "navbar-brand",
									children: "15 Puzzle Game"
								}), Object(a.jsx)("button", {
									className: "navbar-toggler",
									type: "button",
									"data-toggle": "collapse",
									"data-target": "#navbarSupportedContent",
									"aria-controls": "navbarSupportedContent",
									"aria-expanded": "false",
									"aria-label": "Toggle navigation",
									children: Object(a.jsx)("span", {
										className: "navbar-toggler-icon"
									})
								}), Object(a.jsx)("div", {
									className: "collapse navbar-collapse",
									id: "navbarSupportedContent",
									children: Object(a.jsx)(h.b, {
										to: "/",
										children: Object(a.jsx)("span", {
											style: {
												color: "white"
											},
											children: "Home"
										})
									})
								})]
							})
						}
					}]), n
				}(r.Component),
				Pn = (n(128), n(132), n(133), n(84));

			function Dn(e) {
				return new Promise((function(t) {
					return setTimeout(t, e)
				}))
			}
			for (var Vn = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						return Object(o.a)(this, n), (e = t.call(this)).balsal = Object(g.a)(j.a.mark((function t() {
							var n;
							return j.a.wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										n = 0;
									case 1:
										if (!(n < 15)) {
											t.next = 8;
											break
										}
										return e.setState({
											squares: e.state.squares.slice().swap(n, n + 1)
										}), t.next = 5, Dn(500);
									case 5:
										n++, t.next = 1;
										break;
									case 8:
									case "end":
										return t.stop()
								}
							}), t)
						}))), e.state = {
							squares: Object(Pn.times)(16, (function(e) {
								return {
									value: e
								}
							}))
						}, e
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("div", {
								style: {
									backgroundColor: "#57407c"
								},
								className: "full-height",
								children: [Object(a.jsx)(zn, {}), Object(a.jsx)("div", {
									className: "justify-content-around ",
									style: {
										textAlign: "Center"
									},
									children: Object(a.jsxs)("div", {
										style: {
											textAlign: "center",
											height: "440px",
											width: "440px",
											margin: "auto"
										},
										className: "m-5",
										children: [Object(a.jsxs)(_e.a, {
											duration: 750,
											easing: "cubic-bezier(.12,.36,.14,1.2)",
											children: [this.state.squares.map((function(e) {
												return Object(a.jsx)("div", {
													className: 0 === e.value ? "square " : e.value % 2 === 0 ? "square shadow correct pt-1" : "square shadow painted pt-1",
													children: 0 === e.value ? "" : e.value
												}, e.value)
											})), Object(a.jsx)("br", {})]
										}), Object(a.jsx)("button", {
											className: "btn btn-secondary",
											onClick: this.balsal,
											children: "Animate"
										})]
									})
								})]
							})
						}
					}]), n
				}(r.Component), Bn = n(27), Ln = (n(135), function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsx)("div", {
								className: "turing-cell",
								children: this.props.val
							})
						}
					}]), n
				}(r.Component)), qn = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							var e = this;
							return Object(a.jsxs)("div", {
								children: [Object(a.jsx)("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									width: "16",
									height: "16",
									fill: "currentColor",
									className: "bi bi-caret-down-fill",
									viewBox: "0 0 16 16",
									children: Object(a.jsx)("path", {
										d: "M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
									})
								}), Object(a.jsx)(_e.a, {
									className: "d-flex justify-content-center align-items-end",
									duration: 100,
									children: this.props.strip.filter((function(t) {
										return t.id >= e.props.cellStart && t.id <= e.props.cellEnd
									})).map((function(e, t) {
										return Object(a.jsx)(Ln, {
											id: e.id + 50,
											val: e.val
										}, e.id)
									}))
								}), Object(a.jsx)("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									width: "16",
									height: "16",
									fill: "currentColor",
									className: "bi bi-caret-up-fill",
									viewBox: "0 0 16 16",
									children: Object(a.jsx)("path", {
										d: "m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
									})
								})]
							})
						}
					}]), n
				}(r.Component), En = [], In = [], Wn = [
					["q0", "0", "q0", "1", "R"],
					["q0", "1", "q0", "0", "R"],
					["q0", "B", "qe", "B", "R"]
				], Hn = new Map, Fn = 0; Fn < Wn.length; Fn++) Hn.set(Wn[Fn][0] + "," + Wn[Fn][1], [Wn[Fn][2], Wn[Fn][3], Wn[Fn][4], Fn]);
			En.push(Wn), In.push(Hn);
			for (var Gn = [
					["q0", "0", "q0", "0", "R"],
					["q0", "1", "q0", "1", "R"],
					["q0", "B", "q1", "B", "L"],
					["q1", "0", "qe", "1", "R"],
					["q1", "1", "q1", "0", "L"],
					["q1", "B", "qe", "1", "R"]
				], Un = new Map, _n = 0; _n < Gn.length; _n++) Un.set(Gn[_n][0] + "," + Gn[_n][1], [Gn[_n][2], Gn[_n][3], Gn[_n][4], _n]);
			En.push(Gn), In.push(Un);
			for (var Qn = [
					["q0", "0", "q0", "0", "R"],
					["q0", "1", "q0", "1", "R"],
					["q0", "B", "q1", "B", "L"],
					["q1", "0", "q1", "0", "L"],
					["q1", "B", "qe", "B", "L"],
					["q1", "1", "q2", "1", "L"],
					["q2", "0", "q2", "1", "L"],
					["q2", "1", "q2", "0", "L"],
					["q2", "B", "qe", "B", "L"]
				], Yn = new Map, Xn = 0; Xn < Qn.length; Xn++) Yn.set(Qn[Xn][0] + "," + Qn[Xn][1], [Qn[Xn][2], Qn[Xn][3], Qn[Xn][4], Xn]);

			function Jn(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
				return In[n].get(e + "," + t) ? In[n].get(e + "," + t) : ["qe", "B", "R"]
			}
			En.push(Qn), In.push(Yn);
			Object(O.a)({
				root: {
					width: 200
				}
			});
			var $n = Object(O.a)((function(e) {
					return {
						formControl: {
							margin: e.spacing(1),
							minWidth: 120
						},
						selectEmpty: {
							marginTop: e.spacing(2)
						}
					}
				})),
				Kn = function(e) {
					var t = $n(),
						n = s.a.useState("0"),
						r = Object(x.a)(n, 2),
						i = r[0],
						c = r[1],
						o = s.a.useState({
							pos: e.pos
						}),
						l = Object(x.a)(o, 2),
						d = l[0];
					l[1];
					return Object(a.jsx)("div", {
						className: "ml-2 mr-2",
						children: Object(a.jsxs)(w.a, {
							className: t.formControl,
							children: [Object(a.jsx)(y.a, {
								id: "demo-simple-select-label",
								children: "Task"
							}), Object(a.jsxs)(k.a, {
								labelId: "demo-simple-select-label",
								id: "demo-simple-select",
								value: i,
								onChange: function(t) {
									console.log(d.pos), c(t.target.value), e.onAlgoChanged(d.pos, t.target.value)
								},
								children: [Object(a.jsx)(C.a, {
									value: 0,
									style: {
										selected: !0
									},
									children: "Bitwise NOT"
								}), Object(a.jsx)(C.a, {
									value: 1,
									style: {
										selected: !0
									},
									children: "Add One"
								}), Object(a.jsx)(C.a, {
									value: 2,
									style: {
										selected: !0
									},
									children: "2's Compliment"
								})]
							})]
						})
					})
				},
				Zn = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						Object(o.a)(this, n);
						for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
						return (e = t.call.apply(t, [this].concat(r))).isClickable = function() {
							return e.props.disable ? {
								cursor: "not-allowed"
							} : {}
						}, e
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("nav", {
								className: "nav alert-dark",
								children: [Object(a.jsx)(Kn, {
									pos: 0,
									onAlgoChanged: this.props.onAlgoChanged
								}), Object(a.jsx)("div", {
									className: "input-group mt-2 col-3",
									children: Object(a.jsx)("input", {
										type: "text",
										id: "inputText1",
										className: "form-control",
										placeholder: "Input Binary",
										"aria-label": "Username",
										"aria-describedby": "basic-addon1",
										onChange: this.props.setInput1
									})
								}), Object(a.jsx)("div", {
									className: "input-group mt-2 col-3",
									children: Object(a.jsx)("input", {
										type: "text",
										id: "inputText1",
										className: "form-control",
										placeholder: "Input Binary 2",
										"aria-label": "Username",
										"aria-describedby": "basic-addon1",
										onChange: this.props.setInput2
									})
								}), Object(a.jsx)("button", {
									className: "btn btn-warning btn-lg m-2",
									onClick: this.props.onReset,
									disabled: this.props.disable,
									children: "Reset"
								}), Object(a.jsx)("button", {
									className: "btn btn-warning btn-lg ",
									onClick: this.props.visualize,
									disabled: this.props.disable,
									children: "Visualize"
								})]
							})
						}
					}]), n
				}(r.Component),
				ea = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("nav", {
								className: "navbar navbar-expand-lg navbar-dark bg-dark",
								children: [Object(a.jsx)("span", {
									className: "navbar-brand",
									children: "Turing Machine"
								}), Object(a.jsx)("button", {
									className: "navbar-toggler",
									type: "button",
									"data-toggle": "collapse",
									"data-target": "#navbarSupportedContent",
									"aria-controls": "navbarSupportedContent",
									"aria-expanded": "false",
									"aria-label": "Toggle navigation",
									children: Object(a.jsx)("span", {
										className: "navbar-toggler-icon"
									})
								}), Object(a.jsx)("div", {
									className: "collapse navbar-collapse",
									id: "navbarSupportedContent",
									children: Object(a.jsx)(h.b, {
										to: "/",
										children: Object(a.jsx)("span", {
											style: {
												color: "white"
											},
											children: "Home"
										})
									})
								})]
							})
						}
					}]), n
				}(r.Component),
				ta = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							var e = this;
							return console.log(this.props.data), Object(a.jsx)("div", {
								children: Object(a.jsxs)("table", {
									className: "table table-bordered",
									children: [Object(a.jsx)("thead", {
										children: Object(a.jsxs)("tr", {
											children: [Object(a.jsx)("th", {
												scope: "col",
												children: "State"
											}), Object(a.jsx)("th", {
												scope: "col",
												children: "Input"
											}), Object(a.jsx)("th", {
												scope: "col",
												children: "Next"
											}), Object(a.jsx)("th", {
												scope: "col",
												children: "Output"
											}), Object(a.jsx)("th", {
												scope: "col",
												children: "Direction"
											})]
										})
									}), Object(a.jsx)("tbody", {
										children: this.props.data.map((function(t, n) {
											return Object(a.jsxs)("tr", {
												className: n === e.props.state && "table-primary",
												children: [Object(a.jsx)("th", {
													scope: "row",
													children: t[0]
												}), Object(a.jsx)("th", {
													children: t[1]
												}), Object(a.jsx)("td", {
													children: t[2]
												}), Object(a.jsx)("td", {
													children: t[3]
												}), Object(a.jsx)("td", {
													children: t[4]
												})]
											})
										}))
									})]
								})
							})
						}
					}]), n
				}(r.Component),
				na = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						return Object(o.a)(this, n), (e = t.call(this)).handleLeftShift = function() {
							e.setState({
								cellStart: e.state.cellStart + 1,
								cellEnd: e.state.cellEnd + 1,
								midCell: e.state.midCell + 1
							})
						}, e.handleRightShift = function() {
							e.setState({
								cellStart: e.state.cellStart - 1,
								cellEnd: e.state.cellEnd - 1,
								midCell: e.state.midCell - 1
							})
						}, e.handleSet = function() {
							e.handleReset();
							for (var t = e.state.inputString1, n = Object(Bn.a)(e.state.strip), a = 0; a < t.length; a++) n[50 + a] = Object(f.a)(Object(f.a)({}, n[50 + a]), {}, {
								val: t[a]
							});
							e.setState({
								strip: n
							})
						}, e.handleReset = function() {
							var t = window.innerWidth,
								n = (window.innerHeight, Math.floor(t / 50));
							n % 2 === 0 && n--;
							var a, r, s = Object(Bn.a)(e.state.strip);
							0 === s.length && (s = aa(n));
							for (var i = 0; i < s.length; i++) s[i].val = "B";
							e.setState({
								strip: s,
								midCell: 50
							}), a = 50 + (1 - n) / 2, r = 50 + (n - 1) / 2, e.setState({
								cellStart: a,
								cellEnd: r,
								state: -1
							})
						}, e.handleStart = function() {
							e.handleSet(), e.handleAlgo()
						}, e.handleAlgo = Object(g.a)(j.a.mark((function t() {
							var n, a, r, s, i, c, o, l, d;
							return j.a.wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										return t.next = 2, ra(500);
									case 2:
										n = "q0";
									case 3:
										if ("qe" == n) {
											t.next = 21;
											break
										}
										return a = (a = e.state.strip[e.state.midCell].val).toString(), r = Jn(n, a, e.state.algo), s = Object(x.a)(r, 4), i = s[0], c = s[1], o = s[2], l = s[3], e.setState({
											state: l
										}), (d = Object(Bn.a)(e.state.strip))[e.state.midCell].val = c, document.getElementById("stepsText").innerText = "Reads " + a + " on strip", t.next = 13, ra(1e3);
									case 13:
										return document.getElementById("stepsText").innerText = "writes " + c + " on strip", e.setState({
											strip: d
										}), t.next = 17, ra(500);
									case 17:
										"R" === o ? e.handleLeftShift() : e.handleRightShift(), n = i, t.next = 3;
										break;
									case 21:
									case "end":
										return t.stop()
								}
							}), t)
						}))), e.setInput1 = function(t) {
							var n = t.target.value,
								a = Object(Bn.a)(n).filter((function(e) {
									return "0" === e || "1" === e
								})).slice(0, 8).join("");
							e.setState({
								inputString1: a
							})
						}, e.setInput2 = function(t) {
							var n = t.target.value,
								a = Object(Bn.a)(n).filter((function(e) {
									return "0" === e || "1" === e
								})).slice(0, 8).join("");
							e.setState({
								inputString2: a
							})
						}, e.setAlgo = function(t, n) {
							0 === t && e.setState({
								algo: n
							})
						}, e.state = {
							cellCount: 0,
							cellStart: 0,
							cellEnd: 0,
							midCell: 0,
							strip: [],
							inputString1: "",
							inputString2: "",
							table: [],
							algo: 0,
							state: -1
						}, e
					}
					return Object(l.a)(n, [{
						key: "componentDidMount",
						value: function() {
							Jn("100"), this.handleReset()
						}
					}, {
						key: "render",
						value: function() {
							return Object(a.jsxs)("div", {
								children: [Object(a.jsx)(ea, {}), Object(a.jsx)(Zn, {
									visualize: this.handleStart,
									onAlgoChanged: this.setAlgo,
									onReset: this.handleReset,
									setInput1: this.setInput1,
									setInput2: this.setInput2
								}), Object(a.jsxs)("center", {
									children: [Object(a.jsx)("br", {}), Object(a.jsxs)("div", {
										className: "bg-info",
										children: [Object(a.jsx)(qn, {
											strip: this.state.strip,
											midCell: this.state.midCell,
											cellCount: this.state.cellCount,
											cellStart: this.state.cellStart,
											cellEnd: this.state.cellEnd
										}), Object(a.jsx)("button", {
											className: "btn btn-warning m-3",
											onClick: this.handleLeftShift,
											children: Object(a.jsx)("svg", {
												xmlns: "http://www.w3.org/2000/svg",
												width: "16",
												height: "16",
												fill: "currentColor",
												className: "bi bi-caret-left-square-fill",
												viewBox: "0 0 16 16",
												children: Object(a.jsx)("path", {
													d: "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12z"
												})
											})
										}), Object(a.jsx)("button", {
											className: "btn btn-warning m-3",
											onClick: this.handleRightShift,
											children: Object(a.jsx)("svg", {
												xmlns: "http://www.w3.org/2000/svg",
												width: "16",
												height: "16",
												fill: "currentColor",
												className: "bi bi-caret-right-square-fill",
												viewBox: "0 0 16 16",
												children: Object(a.jsx)("path", {
													d: "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"
												})
											})
										})]
									}), Object(a.jsx)("br", {}), Object(a.jsxs)("div", {
										className: "row",
										children: [Object(a.jsx)("div", {
											className: "col-4",
											children: Object(a.jsx)(ta, {
												data: (e = this.state.algo, En[e]),
												state: this.state.state
											})
										}), Object(a.jsx)("div", {
											className: "col-4",
											children: Object(a.jsx)("span", {
												className: "bg-light p-2 font-weight-bold text-lg-center rounded-3",
												id: "stepsText",
												children: "Details goes here"
											})
										}), Object(a.jsx)("div", {
											className: "col-4"
										})]
									})]
								})]
							});
							var e
						}
					}]), n
				}(r.Component),
				aa = function(e) {
					for (var t = [], n = 0; n <= 100; n++) {
						var a = {
							id: n,
							val: "B"
						};
						t.push(a)
					}
					return t
				};

			function ra(e) {
				return new Promise((function(t) {
					return setTimeout(t, e)
				}))
			}
			var sa = na;
			var ia = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.call(this)
					}
					return Object(l.a)(n, [{
						key: "componentDidMount",
						value: function() {
							0 !== this.props.id && (document.getElementById("cxanim" + this.props.id).beginElement(), document.getElementById("cyanim" + this.props.id).beginElement(), document.getElementById("tanim" + this.props.id).beginElement())
						}
					}, {
						key: "render",
						value: function() {
							return Object(a.jsxs)("g", {
								children: [Object(a.jsxs)("circle", {
									cx: this.props.pos.x,
									cy: this.props.pos.y,
									r: 6,
									stroke: "black",
									"stroke-width": "0.5",
									fill: this.props.current ? "cyan" : "white",
									children: [Object(a.jsx)("animate", {
										id: "cxanim" + this.props.id,
										attributeName: "cx",
										values: this.props.pos.px + ";" + this.props.pos.x,
										dur: "0.5s",
										repeatCount: "1"
									}), Object(a.jsx)("animate", {
										id: "cyanim" + this.props.id,
										attributeName: "cy",
										values: this.props.pos.py + ";" + this.props.pos.y,
										dur: "0.5s",
										repeatCount: "1"
									})]
								}), Object(a.jsxs)("text", {
									style: {
										font: "3px sans-serif"
									},
									x: this.props.pos.x,
									y: this.props.pos.y - 4,
									textAnchor: "middle",
									children: [Object(a.jsx)("animate", {
										id: "tanim" + this.props.id,
										attributeName: "opacity",
										values: "0;0;1",
										dur: "1s",
										repeatCount: "1"
									}), Object(a.jsxs)("tspan", {
										x: this.props.pos.x,
										dy: "1.2em",
										children: ["N:", this.props.label]
									}), Object(a.jsxs)("tspan", {
										x: this.props.pos.x,
										dy: "1.2em",
										children: ["R:", this.props.ret]
									})]
								})]
							})
						}
					}]), n
				}(r.Component),
				ca = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						return Object(o.a)(this, n), (e = t.call(this)).getPolyPoints = function() {
							var t = e.props.pos.x1,
								n = e.props.pos.y1,
								a = e.props.pos.x2,
								r = e.props.pos.y2,
								s = Math.sqrt((t - a) * (t - a) + (n - r) * (n - r)),
								i = 6.5;
							return (t * (s - i) + a * i) / s + "," + (n * (s - i) + r * i) / s + " " + a + "," + r
						}, e.getPolyPointsX = function() {
							var t = e.props.pos.x1,
								n = e.props.pos.y1,
								a = e.props.pos.x2,
								r = e.props.pos.y2,
								s = Math.sqrt((t - a) * (t - a) + (n - r) * (n - r)),
								i = 6.5;
							return (a * (s - i) + t * i) / s
						}, e.getPolyPointsY = function() {
							var t = e.props.pos.x1,
								n = e.props.pos.y1,
								a = e.props.pos.x2,
								r = e.props.pos.y2,
								s = Math.sqrt((t - a) * (t - a) + (n - r) * (n - r)),
								i = 6.5;
							return (r * (s - i) + n * i) / s
						}, e.state = {
							x1: 0
						}, e
					}
					return Object(l.a)(n, [{
						key: "componentDidMount",
						value: function() {
							this.setState({
								x1: this.props.pos.x1
							}), document.getElementById("vbanim1" + this.props.id).beginElement(), document.getElementById("vbanim2" + this.props.id).beginElement()
						}
					}, {
						key: "componentDidUpdate",
						value: function(e) {
							this.state.x1 !== this.props.pos.x1 && (this.setState({
								x1: this.props.pos.x1
							}), document.getElementById("vbanim1" + this.props.id).beginElement(), document.getElementById("vbanim2" + this.props.id).beginElement())
						}
					}, {
						key: "render",
						value: function() {
							return Object(a.jsxs)("g", {
								children: [Object(a.jsx)("defs", {
									children: Object(a.jsx)("marker", {
										id: "arrow",
										viewBox: "0 0 10 10",
										refX: "5",
										refY: "5",
										markerWidth: "4",
										markerHeight: "4",
										orient: "auto-start-reverse",
										children: Object(a.jsx)("path", {
											d: "M 0 0 L 10 5 L 0 10 z"
										})
									})
								}), Object(a.jsxs)("line", {
									x2: this.getPolyPointsX(),
									y2: this.getPolyPointsY(),
									x1: this.props.pos.x1,
									y1: this.props.pos.y1,
									style: {
										stroke: "black",
										strokeWidth: "0.5"
									},
									"marker-end": "url(#arrow)",
									children: [Object(a.jsx)("animate", {
										id: "vbanim1" + this.props.id,
										attributeName: "x2",
										values: this.props.pos.x1 + ";" + this.getPolyPointsX(),
										dur: "0.5s",
										repeatCount: "1"
									}), Object(a.jsx)("animate", {
										id: "vbanim2" + this.props.id,
										attributeName: "y2",
										values: this.props.pos.y1 + ";" + this.getPolyPointsY(),
										dur: "0.5s",
										repeatCount: "1"
									})]
								})]
							})
						}
					}]), n
				}(r.Component),
				oa = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						return Object(o.a)(this, n), (e = t.call(this)).increamentXY = function() {
							var t = e.state.pos;
							t.x = (t.x + 50) % 240, e.setState({
								pos: t
							})
						}, e.state = {
							pos: {
								x: 50,
								y: 10
							}
						}, e
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							var e = this;
							console.log(this.props.vertices.length);
							var t = this.props.offset;
							return Object(a.jsx)("div", {
								children: Object(a.jsxs)("svg", {
									viewBox: "0 0 240 150",
									xmlns: "http://www.w3.org/2000/svg",
									children: [this.props.edges.map((function(e, n) {
										return Object(a.jsx)(ca, {
											id: n,
											pos: {
												x1: 15 * (e.x1 - t) + 120,
												y1: 15 * e.y1 + 10,
												x2: 15 * (e.x2 - t) + 120,
												y2: 15 * e.y2 + 10
											}
										})
									})), "}", this.props.vertices.map((function(n, r) {
										return Object(a.jsx)(ia, {
											id: r,
											current: e.props.current === r,
											label: n.label,
											ret: n.val,
											pos: {
												x: 15 * (n.x - t) + 120,
												y: 15 * n.y + 10,
												px: 15 * (n.px - t) + 120,
												py: 15 * n.py + 10
											}
										})
									})), "}"]
								})
							})
						}
					}]), n
				}(r.Component),
				la = function e() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
						n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
						a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
					Object(o.a)(this, e), this.id = 0, this.node = t, this.label = a, this.width = t.length, this.children = n
				},
				da = function e(t) {
					var n = this,
						a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
						r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
						s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
					Object(o.a)(this, e), this.left = function() {
						return void 0 !== n.thread ? n.thread : 0 !== n.children.length ? n.children[0] : void 0
					}, this.right = function() {
						return n.thread ? n.thread : n.children.length ? n.children[n.children.length - 1] : void 0
					}, this.lbrother = function() {
						var e = void 0;
						if (n.parent)
							for (var t = 0; t < n.parent.children.length; t++) {
								var a = n.parent.children[t];
								if (a === n) return e;
								e = a
							}
						return e
					}, this.get_lmost_sibling = function() {
						return !n._lmost_sibling && n.parent && n !== n.parent.children[0] && (n._lmost_sibling = n.parent.children[0]), n._lmost_sibling
					}, this.x = -1, this.y = r, this.tree = t, this.children = [];
					for (var i = 0; i < t.children.length; i++) {
						var c = new e(t.children[i], this, r + 1, i + 1);
						this.children.push(c)
					}
					this.parent = a, this.thread = void 0, this.mod = 0, this.ancestor = this, this.change = 0, this.shift = 0, this._lmost_sibling = void 0, this.number = s
				};

			function ua(e) {
				var t = ba(new da(e)),
					n = ma(t);
				return n < 0 && ha(t, -n), t
			}

			function ha(e, t) {
				e.x += t;
				for (var n = 0; n < e.children; n++) {
					ha(e.children[n], t)
				}
			}

			function ba(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
				if (0 === e.children.length) e.get_lmost_sibling() ? e.x = e.lbrother().x + t : e.x = 0;
				else {
					for (var n = e.children[0], a = 0; a < e.children.length; a++) {
						var r = e.children[a];
						ba(r), n = pa(r, n, t)
					}
					ga(e);
					var s = (e.children[0].x + e.children[e.children.length - 1].x) / 2,
						i = (e.children[0], e.children[-1], e.lbrother());
					i ? (e.x = i.x + t, e.mod = e.x - s) : e.x = s
				}
				return e
			}

			function pa(e, t, n) {
				var a = e.lbrother();
				if (void 0 !== a) {
					var r, s, i, c, o, l, d, u;
					for (r = s = e, i = a, c = e.get_lmost_sibling(), o = l = e.mod, u = i.mod, d = c.mod; i.right() && r.left();) {
						i = i.right(), r = r.left(), c = c.left(), (s = s.right()).ancestor = e;
						var h = i.x + u - (r.x + o) + n;
						h > 0 && (ja(fa(i, e, t), e, h), o += h, l += h), u += i.mod, o += r.mod, d += c.mod, l += s.mod
					}
					i.right() && !s.right() ? (s.thread = i.right(), s.mod += u - l) : (r.left() && !c.left() && (c.thread = r.left(), c.mod += o - d), t = e)
				}
				return t
			}

			function ja(e, t, n) {
				var a = t.number - e.number;
				t.change -= n / a, t.shift += n, e.change += n / a, t.x += n, t.mod += n
			}

			function ga(e) {
				var t, n;
				t = n = 0;
				for (var a = e.children.length - 1; a >= 0; a--) {
					var r = e.children[a];
					r.x += t, r.mod += t, n += r.change, t += r.shift + n
				}
			}

			function fa(e, t, n) {
				return e.ancestor in t.parent.children ? e.ancestor : n
			}

			function ma(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
					a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
				e.x += t, e.y = n, (void 0 === a || e.x < a) && (a = e.x);
				for (var r = 0; r < e.children.length; r++) {
					var s = e.children[r];
					a = ma(s, t + e.mod, n + 1, a)
				}
				return a
			}

			function va(e) {
				var t = new la(e, [], e + "");
				return e < 2 || (t.children.push(va(e - 1)), t.children.push(va(e - 2)), t.node = t.children[0].node + t.children[1].node), t
			}

			function xa(e, t) {
				if (t > e) return new la(-1, [], "(" + e + "," + t + ")");
				if (e === t) return new la(1, [], "(" + e + "," + t + ")");
				if (0 === t) return new la(1, [], "(" + e + "," + t + ")");
				var n = new la(0, [], "(" + e + "," + t + ")");
				return n.children.push(xa(e - 1, t - 1)), n.children.push(xa(e - 1, t)), n.node = n.children[0].node + n.children[1].node, n
			}

			function Oa(e) {
				if (0 == e) return new la(1, [], e + "");
				if (1 == e) return new la(0, [], e + "");
				var t = new la(0, [], e + "");
				return t.children.push(Oa(e - 1)), t.children.push(Oa(e - 2)), t.node = (e - 1) * (t.children[0].node + t.children[1].node), t
			}

			function ya(e, t) {
				if (0 === t) return new la(1, [], "(" + e + "," + t + ")");
				if (1 === t) return new la(e, [], "(" + e + "," + t + ")");
				var n = new la(1, [], "(" + e + "," + t + ")");
				t % 2 === 1 ? (n.children.push(ya(e, (t - 1) / 2)), n.children.push(ya(e, (t - 1) / 2)), n.children.push(ya(e, 1))) : (n.children.push(ya(e, t / 2)), n.children.push(ya(e, t / 2)));
				for (var a = 0; a < n.children.length; a++) n.node *= n.children[a].node;
				return n
			}

			function Ca(e, t) {
				if (e === t) return new la(1, [], "(" + e + "," + t + ")");
				if (0 === t) return new la(0, [], "(" + e + "," + t + ")");
				var n = new la(0, [], "(" + e + "," + t + ")");
				return n.children.push(Ca(e - 1, t)), n.children.push(Ca(e - 1, t - 1)), n.node = n.children[0].node * t + n.children[1].node, n
			}
			var wa = Object(O.a)((function(e) {
					return {
						formControl: {
							margin: e.spacing(1),
							minWidth: 120
						},
						selectEmpty: {
							marginTop: e.spacing(2)
						}
					}
				})),
				ka = function(e) {
					var t = wa(),
						n = s.a.useState("0"),
						r = Object(x.a)(n, 2),
						i = r[0],
						c = r[1],
						o = s.a.useState({
							pos: e.pos
						}),
						l = Object(x.a)(o, 2),
						d = l[0];
					l[1];
					return Object(a.jsx)("div", {
						className: "ml-2 mr-2",
						children: Object(a.jsxs)(w.a, {
							className: t.formControl,
							children: [Object(a.jsx)(y.a, {
								id: "demo-simple-select-label",
								children: e.label
							}), Object(a.jsx)(k.a, {
								labelId: "demo-simple-select-label",
								id: "demo-simple-select",
								value: i,
								onChange: function(t) {
									console.log(d.pos), c(t.target.value), e.onValueChanged(d.pos, t.target.value)
								},
								children: e.items.map((function(e, t) {
									return Object(a.jsx)(C.a, {
										value: t,
										style: {
											selected: !0
										},
										children: e
									})
								}))
							})]
						})
					})
				},
				Sa = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						Object(o.a)(this, n);
						for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++) r[s] = arguments[s];
						return (e = t.call.apply(t, [this].concat(r))).isClickable = function() {
							return e.props.disable ? {
								cursor: "not-allowed"
							} : {}
						}, e
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("nav", {
								className: "nav alert-dark",
								children: [Object(a.jsx)(ka, {
									pos: 0,
									label: "Task",
									items: ["Fibonacci", "Binomial Coefficient", "Derangement", "Bigmod", "Stirling2"],
									onValueChanged: this.props.setAlgo
								}), Object(a.jsx)(ka, {
									pos: 0,
									label: "N",
									items: [0, 1, 2, 3, 4, 5, 6],
									onValueChanged: this.props.setN
								}), Object(a.jsx)(ka, {
									pos: 0,
									label: "R",
									items: [0, 1, 2, 3, 4, 5, 6],
									onValueChanged: this.props.setR
								}), Object(a.jsx)("button", {
									className: "btn btn-warning btn-lg m-2",
									onClick: this.props.onReset,
									disabled: this.props.disable,
									children: "Reset"
								}), Object(a.jsx)("button", {
									className: "btn btn-warning btn-lg ",
									onClick: this.props.onStart,
									disabled: this.props.disable,
									children: "Visualize"
								})]
							})
						}
					}]), n
				}(r.Component),
				Na = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.apply(this, arguments)
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("nav", {
								className: "navbar navbar-expand-lg navbar-dark bg-dark",
								children: [Object(a.jsx)("span", {
									className: "navbar-brand",
									children: "Recursion Tree"
								}), Object(a.jsx)("button", {
									className: "navbar-toggler",
									type: "button",
									"data-toggle": "collapse",
									"data-target": "#navbarSupportedContent",
									"aria-controls": "navbarSupportedContent",
									"aria-expanded": "false",
									"aria-label": "Toggle navigation",
									children: Object(a.jsx)("span", {
										className: "navbar-toggler-icon"
									})
								}), Object(a.jsx)("div", {
									className: "collapse navbar-collapse",
									id: "navbarSupportedContent",
									children: Object(a.jsx)(h.b, {
										to: "/",
										children: Object(a.jsx)("span", {
											style: {
												color: "white"
											},
											children: "Home"
										})
									})
								})]
							})
						}
					}]), n
				}(r.Component),
				Ra = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						Object(o.a)(this, n);
						for (var r = arguments.length, s = new Array(r), i = 0; i < r; i++) s[i] = arguments[i];
						return (e = t.call.apply(t, [this].concat(s))).Switcherr = function() {
							switch (e.props.algo) {
								case 0:
									return Object(a.jsxs)("div", {
										className: "row bg-info m-0 p-2",
										children: [Object(a.jsx)("div", {
											className: "col-3  card me-1 bg-light ",
											children: "The Fibonacci sequence, in which each number is the sum of the two preceding ones. The sequence commonly starts from 0 and 1"
										}), Object(a.jsx)("div", {
											className: "col-3  card me-1 bg-light ",
											children: "N = Nth fibonacchi Number"
										}), Object(a.jsx)("div", {
											className: "col-3  bg-light ",
											children: "function = nCr(n,r)"
										}), Object(a.jsxs)("div", {
											className: "col-3  card me-1 bg-light",
											children: ["Fib(0) = 0 ", Object(a.jsx)("br", {}), "Fib(1) = 1 ", Object(a.jsx)("br", {}), "Fib(n) = Fib(n-1) + Fib(n-2)"]
										})]
									});
								case 1:
									return Object(a.jsxs)("div", {
										className: "row bg-info m-0 p-2 ",
										children: [Object(a.jsx)("div", {
											className: "col-3  card me-1 bg-light",
											children: "In mathematics, the binomial coefficients are the positive integers that occur as coefficients in the binomial theorem. It is the coefficient of the x^k term in the polynomial expansion of the binomial power (1+x)^n"
										}), Object(a.jsx)("div", {
											className: "col-3  card me-1 bg-light",
											children: "nCr = n! / ( k! * (n-k)! )"
										}), Object(a.jsx)("div", {
											className: "col-3  card me-1 bg-light",
											children: "function = nCr(n,r)"
										}), Object(a.jsxs)("div", {
											className: "col-3  card me-1 bg-light",
											children: ["nCr(a,a) = 1 ", Object(a.jsx)("br", {}), "nCr(a,0) = 1 ", Object(a.jsx)("br", {}), "nCr(n,r) = nCr(n-1,r-1)+nCr(n-1,r)"]
										})]
									});
								case 2:
									return Object(a.jsxs)("div", {
										className: "row bg-info m-0 p-2 ",
										children: [Object(a.jsx)("div", {
											className: "col-3  card me-1 bg-light ",
											children: "In combinatorial mathematics, a derangement is a permutation of the elements of a set, such that no element appears in its original position."
										}), Object(a.jsx)("div", {
											className: "col-3  card me-1 bg-light ",
											children: "N = Nth Derangement"
										}), Object(a.jsx)("div", {
											className: "col-3  card me-1 bg-light ",
											children: "function = der(n)"
										}), Object(a.jsxs)("div", {
											className: "col-3  card me-1 bg-light ",
											children: ["der(0) = 1 ", Object(a.jsx)("br", {}), "der(1) = 0 ", Object(a.jsx)("br", {}), "der(n) = (n-1) * ( der(n-1) + der(n-2) )"]
										})]
									});
								case 3:
									return Object(a.jsxs)("div", {
										className: "row bg-info m-0 p-2 ",
										children: [Object(a.jsx)("div", {
											className: "col-3  card me-1 bg-light ",
											children: "N = Number P = Power"
										}), Object(a.jsx)("div", {
											className: "col-3  card me-1 bg-light ",
											children: "function = bigmod(n,p)"
										}), Object(a.jsxs)("div", {
											className: "col-3  card me-1 bg-light ",
											children: ["bigmod(a,0) = 1 ", Object(a.jsx)("br", {}), "bigmod(a,1) = a ", Object(a.jsx)("br", {}), "bigmod(n,p) = bigmod(n,p/2)^2; p is even ", Object(a.jsx)("br", {}), "bigmod(n,p) = bigmod(n,(p-1)/2)^2 * n ; p is odd"]
										})]
									});
								case 4:
									return Object(a.jsxs)("div", {
										className: "row bg-info m-0 p-2 ",
										children: [Object(a.jsx)("div", {
											className: "col-3  card me-1 bg-light ",
											children: "a Stirling number of the second kind (or Stirling partition number) is the number of ways to partition a set of n objects into k non-empty subsets"
										}), Object(a.jsx)("div", {
											className: "col-3  card me-1 bg-light ",
											children: "N = Row R = Column"
										}), Object(a.jsx)("div", {
											className: "col-3  card me-1 bg-light ",
											children: "function = stir2(n,r)"
										}), Object(a.jsxs)("div", {
											className: "col-3  card me-1 bg-light ",
											children: ["stir2(a,a) = 1 ", Object(a.jsx)("br", {}), "stir2(0,a) = 0 ", Object(a.jsx)("br", {}), "stir2(n,r) = stir2(n-1,r) * r + stir2(n-1,r-1)"]
										})]
									});
								default:
									return Object(a.jsx)("b", {
										children: "Henlo"
									})
							}
						}, e
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsx)("div", {
								children: this.Switcherr()
							})
						}
					}]), n
				}(r.Component);

			function Aa(e) {
				return new Promise((function(t) {
					return setTimeout(t, e)
				}))
			}
			var Ma = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						var e;
						return Object(o.a)(this, n), (e = t.call(this)).setAlgo = function(t, n) {
							0 === t && e.setState({
								algo: n
							})
						}, e.setN = function(t, n) {
							0 === t && e.setState({
								n: n
							})
						}, e.setR = function(t, n) {
							0 === t && e.setState({
								r: n
							})
						}, e.addNumber = function() {
							var t = function(e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
									n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
								return 0 === t ? ua(va(e)) : 1 === t ? ua(xa(e, n)) : 2 === t ? ua(Oa(e)) : 3 === t ? ua(ya(e, n)) : 4 === t ? ua(Ca(e, n)) : void 0
							}(e.state.n, e.state.algo, e.state.r);
							e.setState({
								edges: [],
								vertices: [],
								offset: t.x
							}), e.state.vertices = [], e.recur(t, void 0)
						}, e.recur = function() {
							var t = Object(g.a)(j.a.mark((function t(n, a) {
								var r, s, i, c, o;
								return j.a.wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return r = e.state.vertices, s = e.state.vertices.length, void 0 !== a ? (n.children.length ? r.push({
												label: n.tree.label,
												val: 0,
												x: n.x,
												y: n.y,
												px: a.x,
												py: a.y
											}) : r.push({
												label: n.tree.label,
												val: n.tree.node,
												x: n.x,
												y: n.y,
												px: a.x,
												py: a.y
											}), e.setState({
												vertices: r,
												current: s
											}), (i = e.state.edges).push({
												x1: a.x,
												y1: a.y,
												x2: n.x,
												y2: n.y
											}), e.setState({
												edges: i
											})) : (n.children.length ? r.push({
												label: n.tree.label,
												val: 0,
												x: n.x,
												y: n.y,
												px: n.x,
												py: n.y
											}) : r.push({
												label: n.tree.label,
												val: n.tree.node,
												x: n.x,
												y: n.y,
												px: n.x,
												py: n.y
											}), e.setState({
												vertices: r,
												current: s
											})), t.next = 5, Aa(500);
										case 5:
											c = 0;
										case 6:
											if (!(c < n.children.length)) {
												t.next = 15;
												break
											}
											return t.next = 9, e.recur(n.children[c], n);
										case 9:
											return e.setState({
												current: s
											}), t.next = 12, Aa(500);
										case 12:
											c++, t.next = 6;
											break;
										case 15:
											(o = Object(Bn.a)(e.state.vertices))[s].val = n.tree.node, e.setState({
												vertices: o
											});
										case 18:
										case "end":
											return t.stop()
									}
								}), t)
							})));
							return function(e, n) {
								return t.apply(this, arguments)
							}
						}(), e.state = {
							root: void 0,
							vertices: [],
							edges: [],
							current: -1,
							n: 0,
							r: 2,
							algo: 0,
							offset: 0
						}, e
					}
					return Object(l.a)(n, [{
						key: "render",
						value: function() {
							return Object(a.jsxs)("div", {
								children: [Object(a.jsx)(Na, {}), Object(a.jsx)(Sa, {
									setN: this.setN,
									setR: this.setR,
									setAlgo: this.setAlgo,
									onStart: this.addNumber
								}), Object(a.jsx)(Ra, {
									algo: this.state.algo
								}), Object(a.jsx)(oa, {
									vertices: this.state.vertices,
									edges: this.state.edges,
									current: this.state.current,
									offset: this.state.offset
								})]
							})
						}
					}]), n
				}(r.Component),
				Ta = function(e) {
					Object(d.a)(n, e);
					var t = Object(u.a)(n);

					function n() {
						return Object(o.a)(this, n), t.call(this)
					}
					return Object(l.a)(n, [{
						key: "componentDidMount",
						value: function() {}
					}, {
						key: "render",
						value: function() {
							return Object(a.jsx)(h.a, {
								basename: "/",
								children: Object(a.jsxs)(b.c, {
									children: [Object(a.jsx)(b.a, {
										path: "/pathfinder",
										component: U
									}), Object(a.jsx)(b.a, {
										path: "/prime",
										component: Ge
									}), Object(a.jsx)(b.a, {
										path: "/sort",
										component: xt
									}), Object(a.jsx)(b.a, {
										path: "/nqueen",
										component: At
									}), Object(a.jsx)(b.a, {
										path: "/convexhull",
										component: Qt
									}), Object(a.jsx)(b.a, {
										path: "/binarysearch",
										component: an
									}), Object(a.jsx)(b.a, {
										path: "/recursivesort",
										component: Tn
									}), Object(a.jsx)(b.a, {
										path: "/turing",
										component: sa
									}), Object(a.jsx)(b.a, {
										path: "/15puzzle",
										component: Vn
									}), Object(a.jsx)(b.a, {
										path: "/graph",
										component: Ma
									}), Object(a.jsx)(b.a, {
										path: "/",
										component: we
									})]
								})
							})
						}
					}]), n
				}(r.Component),
				za = function(e) {
					e && e instanceof Function && n.e(3).then(n.bind(null, 190)).then((function(t) {
						var n = t.getCLS,
							a = t.getFID,
							r = t.getFCP,
							s = t.getLCP,
							i = t.getTTFB;
						n(e), a(e), r(e), s(e), i(e)
					}))
				};
			n(136), n(137);
			c.a.render(Object(a.jsx)(s.a.StrictMode, {
				children: Object(a.jsx)(Ta, {})
			}), document.getElementById("root")), za()
		},
		49: function(e, t, n) {},
		81: function(e, t, n) {}
	},
	[
		[138, 1, 2]
	]
]);
//# sourceMappingURL=main.e214ebf8.chunk.js.map