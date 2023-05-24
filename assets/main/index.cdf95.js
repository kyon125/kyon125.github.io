System.register("chunks:///_virtual/AIManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "0a7c13Sqk9EdLreJohUKzkm", "AIManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AIManager = exports('AIManager', (_dec = ccclass('AIManager'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AIManager, _Component);

        function AIManager() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = AIManager.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        return AIManager;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AITest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Sprite, tween, Color, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Sprite = module.Sprite;
      tween = module.tween;
      Color = module.Color;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "3a02dCLbhdA3q22A8zG7HGl", "AITest", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AITest = exports('AITest', (_dec = ccclass('AITest'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property({
        type: Sprite
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AITest, _Component);

        function AITest() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "player", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "enemy", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "seatMap", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mapBG", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "map", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "maps", _descriptor6, _assertThisInitialized(_this));

          _this.selfSeat = [0, 0];
          _this.enemySeat = [4, 4];
          return _this;
        }

        var _proto = AITest.prototype;

        _proto.start = function start() {
          for (var i = 0; i < this.map.children.length; i++) {
            // let btn = this.map.children[i].addComponent(Button);
            // btn.target = this.map.children[i];
            // let event = new EventHandler();
            // event.target = this.node;
            // event.component = 'AITest';
            // event.handler = 'playerMove';
            // event.customEventData = i.toString();
            // btn.clickEvents.push(event);
            this.maps.push(this.map.children[i].getComponent(Sprite));
          }

          this.ShowMoveRange({
            x: 5,
            y: 5
          }, 2); // while (targetDistance(this.self, targets) > 1)
          //     MoveToTarget(3, this.self, targets);
        };

        _proto.update = function update(deltaTime) {};

        _proto.playerMove = function playerMove(e, seat) {
          var _this2 = this;

          if (CheckCanMove(3, this.selfSeat, [Math.floor(seat / 5), seat % 5])) {
            this.selfSeat = [Math.floor(seat / 5), seat % 5];
            console.log(this.selfSeat);
            tween(this.player).set({
              position: this.map.children[seat].position
            }).start();
            this.ShowMoveRange({
              x: 5,
              y: 5
            }, 2);
            MoveToTarget(1, this.enemySeat, this.selfSeat, function () {
              return tween(_this2.enemy).set({
                position: _this2.seatMap.children[_this2.enemySeat[0] * 5 + _this2.enemySeat[1]].position
              }).start();
            });
          } else {
            console.warn("移動距離過遠，無法移動到此位置");
          }
        };

        _proto.ShowMoveRange = function ShowMoveRange(_ref, moveValue) {
          var x = _ref.x,
              y = _ref.y;

          for (var a = 0; a < x; a++) {
            for (var i = 0; i < y; i++) {
              this.maps[a * x + i].color = CheckCanMove(moveValue, this.selfSeat, [a, i]) ? Color.BLUE : Color.GRAY;
            }
          }
        };

        return AITest;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemy", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "seatMap", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "mapBG", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "map", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "maps", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      function CheckCanMove(moveValue, selfSeat, targetSeat) {
        return moveValue >= targetDistance(selfSeat, targetSeat) ? true : false;
      }

      function targetDistance(selfSeat, targetSeat) {
        return Math.abs(selfSeat[0] - targetSeat[0]) + Math.abs(selfSeat[1] - targetSeat[1]);
      }

      function MoveToTarget(moveValue, selfSeat, targetSeat, callback) {
        var disX = Math.abs(selfSeat[0] - targetSeat[0]);
        var disY = Math.abs(selfSeat[1] - targetSeat[1]);

        for (var i = 0; i < moveValue; i++) {
          if (targetDistance(selfSeat, targetSeat) > 1) {
            if (disX >= disY) {
              if (disX === 0) break;else {
                selfSeat[0] > targetSeat[0] ? selfSeat[0]-- : selfSeat[0]++;
                disX--;
                console.log(selfSeat);
              }
            } else {
              if (disY === 0) break;else {
                selfSeat[1] > targetSeat[1] ? selfSeat[1]-- : selfSeat[1]++;
                disY--;
                console.log(selfSeat);
              }
            }
          }
        }

        callback();

        if (targetDistance(selfSeat, targetSeat) <= 1) {
          console.log("\u5DF2\u62B5\u9054\uFF0CtargetSeat:" + targetSeat + " selfSeat:" + selfSeat);
          return false;
        } else {
          console.log("\u79FB\u52D5\u81F3" + selfSeat);
          return true;
        }
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Arms.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameClass.ts', './SoundManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Status, SoundManager;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      Status = module.Status;
    }, function (module) {
      SoundManager = module.SoundManager;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "79c67o6g+VERJ0OL0ePbB0k", "Arms", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Arms = exports('Arms', (_dec = ccclass("Arms"), _dec(_class = function Arms(Data, manager, viewer) {
        this.gamemanager = void 0;
        this.viewer = void 0;
        this.characterData = void 0;
        this.attackRange = void 0;
        this.gamemanager = manager;
        this.characterData = Data;
        this.viewer = viewer;
      }) || _class));
      var Saber = exports('Saber', /*#__PURE__*/function (_Arms) {
        _inheritsLoose(Saber, _Arms);

        function Saber() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Arms.call.apply(_Arms, [this].concat(args)) || this;
          _this.attackRange = [[-1, 0], [1, 0], [0, 1], [0, -1]];
          return _this;
        }

        var _proto = Saber.prototype;

        _proto.GetAttackRange = function GetAttackRange(attackerSeat) {
          var _this2 = this;

          var seats = [];
          this.attackRange.forEach(function (element) {
            var seat = attackerSeat.Add(element);
            if (seat.x >= 0 && seat.x < _this2.gamemanager.mapRange.x && seat.y >= 0 && seat.y < _this2.gamemanager.mapRange.y) seats.push(seat);
          });
          return seats;
        };

        _proto.Attack = /*#__PURE__*/function () {
          var _Attack = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(attackerSeat) {
            var _this3 = this;

            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    SoundManager.Instance.PlaySEFX("SEFX_SwordAttack02");
                    _context2.next = 3;
                    return new Promise(function (res) {
                      _this3.viewer.HideBehaviorBtn();

                      _this3.viewer.RefreshCurrentCharacterInfo(_this3.characterData);

                      var seats = _this3.GetAttackRange(attackerSeat);

                      var charas = _this3.gamemanager.SearchCharacterInSeat(seats);

                      var targets = [];

                      _this3.viewer.PlayCharacterAnimation(_this3.characterData, Status.Attack, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                        var i, _i, a;

                        return _regeneratorRuntime().wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                i = 0;

                              case 1:
                                if (!(i < charas.length)) {
                                  _context.next = 10;
                                  break;
                                }

                                if (!(charas[i].tag !== _this3.characterData.tag)) {
                                  _context.next = 7;
                                  break;
                                }

                                _this3.viewer.ShowAttackHitEffect(_this3.gamemanager.GetMapPos(charas[i].seat), "Effect_Hit");

                                _context.next = 6;
                                return charas[i].Arm.GetDamage(_this3.characterData.currentAtk);

                              case 6:
                                targets.push(charas[i]);

                              case 7:
                                i++;
                                _context.next = 1;
                                break;

                              case 10:
                                _i = 0;

                              case 11:
                                if (!(_i < targets.length)) {
                                  _context.next = 23;
                                  break;
                                }

                                a = 0;

                              case 13:
                                if (!(a < _this3.gamemanager.charatersData.length)) {
                                  _context.next = 20;
                                  break;
                                }

                                if (!(_this3.gamemanager.charatersData[a].tag == _this3.characterData.tag && _this3.characterData != _this3.gamemanager.charatersData[a])) {
                                  _context.next = 17;
                                  break;
                                }

                                _context.next = 17;
                                return _this3.gamemanager.charatersData[a].Arm.ComboAttack(_this3.gamemanager.charatersData[a].seat, targets[_i]);

                              case 17:
                                a++;
                                _context.next = 13;
                                break;

                              case 20:
                                _i++;
                                _context.next = 11;
                                break;

                              case 23:
                                res();

                                _this3.viewer.ShowBehaviorBtn();

                              case 25:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      })));
                    });

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function Attack(_x) {
            return _Attack.apply(this, arguments);
          }

          return Attack;
        }();

        _proto.ComboAttack = /*#__PURE__*/function () {
          var _ComboAttack = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(attackerSeat, target) {
            var _this4 = this;

            var seats, i;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    seats = this.GetAttackRange(attackerSeat);

                    if (!(target.currentHp > 0)) {
                      _context4.next = 10;
                      break;
                    }

                    i = 0;

                  case 3:
                    if (!(i < seats.length)) {
                      _context4.next = 10;
                      break;
                    }

                    if (!target.seat.CheakTheSame(seats[i])) {
                      _context4.next = 7;
                      break;
                    }

                    _context4.next = 7;
                    return new Promise(function (res) {
                      SoundManager.Instance.PlaySEFX("SEFX_SwordAttack02");

                      _this4.viewer.PlayCharacterAnimation(_this4.characterData, Status.Attack, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                console.log("b3");

                                _this4.viewer.ShowAttackHitEffect(_this4.gamemanager.GetMapPos(target.seat), "Effect_Hit");

                                _context3.next = 4;
                                return target.Arm.GetDamage(_this4.characterData.currentAtk);

                              case 4:
                                res();

                              case 5:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3);
                      })));
                    });

                  case 7:
                    i++;
                    _context4.next = 3;
                    break;

                  case 10:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));

          function ComboAttack(_x2, _x3) {
            return _ComboAttack.apply(this, arguments);
          }

          return ComboAttack;
        }();

        _proto.GetDamage = /*#__PURE__*/function () {
          var _GetDamage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(damageValue) {
            var calculateValue, i;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    calculateValue = damageValue;
                    i = 0;

                  case 2:
                    if (!(i < damageValue)) {
                      _context6.next = 13;
                      break;
                    }

                    if (!(this.characterData.currentDef > 0)) {
                      _context6.next = 9;
                      break;
                    }

                    console.log("block--");
                    calculateValue--;
                    this.characterData.currentDef--;
                    _context6.next = 10;
                    break;

                  case 9:
                    return _context6.abrupt("break", 13);

                  case 10:
                    i++;
                    _context6.next = 2;
                    break;

                  case 13:
                    damageValue = calculateValue;
                    if (damageValue > 0) this.characterData.currentHp -= damageValue;
                    this.viewer.RefreshSmallCharacterStatus(this.characterData);
                    this.viewer.PlayCharacterAnimation(this.characterData, Status.damage, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                            case "end":
                              return _context5.stop();
                          }
                        }
                      }, _callee5);
                    })));
                    _context6.next = 19;
                    return this.viewer.ShowCharacterHurtEffect(this.gamemanager.GetMapPos(this.characterData.seat), damageValue);

                  case 19:
                    if (!(this.characterData.currentHp <= 0)) {
                      _context6.next = 22;
                      break;
                    }

                    _context6.next = 22;
                    return this.viewer.PlayCharacterDeath(this.characterData);

                  case 22:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));

          function GetDamage(_x4) {
            return _GetDamage.apply(this, arguments);
          }

          return GetDamage;
        }();

        return Saber;
      }(Arms));
      var Archer = exports('Archer', /*#__PURE__*/function (_Arms2) {
        _inheritsLoose(Archer, _Arms2);

        function Archer() {
          var _this5;

          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          _this5 = _Arms2.call.apply(_Arms2, [this].concat(args)) || this;
          _this5.attackRange = [[-1, 1], [-2, 0], [-1, -1], [2, 0], [1, -1], [0, -2], [1, 1], [0, 2]];
          return _this5;
        }

        var _proto2 = Archer.prototype;

        _proto2.ComboAttack = /*#__PURE__*/function () {
          var _ComboAttack2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(attackerSeat, target) {
            var _this6 = this;

            var seats, i;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    seats = this.GetAttackRange(attackerSeat);

                    if (!(target.currentHp > 0)) {
                      _context8.next = 10;
                      break;
                    }

                    i = 0;

                  case 3:
                    if (!(i < seats.length)) {
                      _context8.next = 10;
                      break;
                    }

                    if (!target.seat.CheakTheSame(seats[i])) {
                      _context8.next = 7;
                      break;
                    }

                    _context8.next = 7;
                    return new Promise(function (res) {
                      SoundManager.Instance.PlaySEFX("SEFX_GunAttack");

                      _this6.viewer.PlayCharacterAnimation(_this6.characterData, Status.Attack, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                console.log("b3");

                                _this6.viewer.ShowAttackHitEffect(_this6.gamemanager.GetMapPos(target.seat), "Effect_Hit");

                                _context7.next = 4;
                                return target.Arm.GetDamage(_this6.characterData.currentAtk);

                              case 4:
                                res();

                              case 5:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7);
                      })));
                    });

                  case 7:
                    i++;
                    _context8.next = 3;
                    break;

                  case 10:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));

          function ComboAttack(_x5, _x6) {
            return _ComboAttack2.apply(this, arguments);
          }

          return ComboAttack;
        }();

        _proto2.GetAttackRange = function GetAttackRange(attackerSeat) {
          var _this7 = this;

          var seats = [];
          this.attackRange.forEach(function (element) {
            var seat = attackerSeat.Add(element);
            if (seat.x >= 0 && seat.x < _this7.gamemanager.mapRange.x && seat.y >= 0 && seat.y < _this7.gamemanager.mapRange.y) seats.push(seat);
          });
          return seats;
        };

        _proto2.Attack = /*#__PURE__*/function () {
          var _Attack2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(attackerSeat) {
            var _this8 = this;

            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    SoundManager.Instance.PlaySEFX("SEFX_GunAttack");
                    this.viewer.HideBehaviorBtn();
                    _context10.next = 4;
                    return new Promise(function (res) {
                      _this8.viewer.RefreshCurrentCharacterInfo(_this8.characterData);

                      var seats = _this8.GetAttackRange(attackerSeat);

                      var charas = _this8.gamemanager.SearchCharacterInSeat(seats);

                      var targets = [];

                      _this8.viewer.PlayCharacterAnimation(_this8.characterData, Status.Attack, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
                        var i, _i2, a;

                        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                i = 0;

                              case 1:
                                if (!(i < charas.length)) {
                                  _context9.next = 10;
                                  break;
                                }

                                if (!(charas[i].tag !== _this8.characterData.tag)) {
                                  _context9.next = 7;
                                  break;
                                }

                                _this8.viewer.ShowAttackHitEffect(_this8.gamemanager.GetMapPos(charas[i].seat), "Effect_Hit");

                                _context9.next = 6;
                                return charas[i].Arm.GetDamage(_this8.characterData.currentAtk);

                              case 6:
                                targets.push(charas[i]);

                              case 7:
                                i++;
                                _context9.next = 1;
                                break;

                              case 10:
                                _i2 = 0;

                              case 11:
                                if (!(_i2 < targets.length)) {
                                  _context9.next = 23;
                                  break;
                                }

                                a = 0;

                              case 13:
                                if (!(a < _this8.gamemanager.charatersData.length)) {
                                  _context9.next = 20;
                                  break;
                                }

                                if (!(_this8.gamemanager.charatersData[a].tag == _this8.characterData.tag && _this8.characterData != _this8.gamemanager.charatersData[a])) {
                                  _context9.next = 17;
                                  break;
                                }

                                _context9.next = 17;
                                return _this8.gamemanager.charatersData[a].Arm.ComboAttack(_this8.gamemanager.charatersData[a].seat, targets[_i2]);

                              case 17:
                                a++;
                                _context9.next = 13;
                                break;

                              case 20:
                                _i2++;
                                _context9.next = 11;
                                break;

                              case 23:
                                res();

                                _this8.viewer.ShowBehaviorBtn();

                              case 25:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9);
                      })));
                    });

                  case 4:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));

          function Attack(_x7) {
            return _Attack2.apply(this, arguments);
          }

          return Attack;
        }();

        _proto2.GetDamage = /*#__PURE__*/function () {
          var _GetDamage2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(damageValue) {
            var calculateValue, i;
            return _regeneratorRuntime().wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    calculateValue = damageValue;
                    i = 0;

                  case 2:
                    if (!(i < damageValue)) {
                      _context12.next = 13;
                      break;
                    }

                    if (!(this.characterData.currentDef > 0)) {
                      _context12.next = 9;
                      break;
                    }

                    console.log("block--");
                    calculateValue--;
                    this.characterData.currentDef--;
                    _context12.next = 10;
                    break;

                  case 9:
                    return _context12.abrupt("break", 13);

                  case 10:
                    i++;
                    _context12.next = 2;
                    break;

                  case 13:
                    damageValue = calculateValue;
                    if (damageValue > 0) this.characterData.currentHp -= damageValue;
                    this.viewer.RefreshSmallCharacterStatus(this.characterData);
                    this.viewer.PlayCharacterAnimation(this.characterData, Status.damage, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
                      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                        while (1) {
                          switch (_context11.prev = _context11.next) {
                            case 0:
                            case "end":
                              return _context11.stop();
                          }
                        }
                      }, _callee11);
                    })));
                    _context12.next = 19;
                    return this.viewer.ShowCharacterHurtEffect(this.gamemanager.GetMapPos(this.characterData.seat), damageValue);

                  case 19:
                    if (!(this.characterData.currentHp <= 0)) {
                      _context12.next = 22;
                      break;
                    }

                    _context12.next = 22;
                    return this.viewer.PlayCharacterDeath(this.characterData);

                  case 22:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));

          function GetDamage(_x8) {
            return _GetDamage2.apply(this, arguments);
          }

          return GetDamage;
        }();

        return Archer;
      }(Arms));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CardManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, CCString;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCString = module.CCString;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "a95f8V/8NRNxrLYhbrpo4mZ", "CardManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CardManager = exports('CardManager', (_dec = ccclass('CardManager'), _dec2 = property(CCString), _dec3 = property(CCString), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function CardManager(cards) {
          _initializerDefineProperty(this, "currentCardGroup", _descriptor, this);

          _initializerDefineProperty(this, "HandleCard", _descriptor2, this);

          this.InitialCardGroup(cards);
        }

        var _proto = CardManager.prototype;

        _proto.InitialCardGroup = function InitialCardGroup(cards) {
          var _this = this;

          this.HandleCard = [];

          if (this.currentCardGroup.length == 0) {
            this.currentCardGroup = [];
            cards.forEach(function (card) {
              for (var i = 0; i < card.amount; i++) {
                _this.currentCardGroup.push(card.cardID);
              }
            });
          }
        };

        _proto.TakeCard = function TakeCard(times) {
          for (var i = 0; i < times; i++) {
            var index = Math.floor(100 * Math.random()); //console.log("抽卡");

            if (this.currentCardGroup.length > 0) {
              while (index >= this.currentCardGroup.length) {
                index = Math.floor(100 * Math.random());
              }

              this.HandleCard.push(this.currentCardGroup[index]);
              this.currentCardGroup.splice(index, 1);
            }
          }
        };

        return CardManager;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "currentCardGroup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "HandleCard", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Cardtest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Camera, Sprite, Node, Prefab, tween, Vec3, instantiate, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      Sprite = module.Sprite;
      Node = module.Node;
      Prefab = module.Prefab;
      tween = module.tween;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "4d9bbtaAPtEr4joliOWw5u1", "Cardtest", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CardViewer = exports('CardViewer', (_dec = ccclass('CardViewer'), _dec2 = property(Camera), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Node), _dec7 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CardViewer, _Component);

        function CardViewer() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "cam", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cards", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "select", _descriptor3, _assertThisInitialized(_this));

          _this.original = void 0;
          _this.isDrop = void 0;

          _initializerDefineProperty(_this, "Player", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Center", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "source", _descriptor6, _assertThisInitialized(_this));

          _this.Allpos = [];
          _this.startY = void 0;
          return _this;
        }

        var _proto = CardViewer.prototype;

        _proto.start = function start() {
          this.Player.node.on(Node.EventType.MOUSE_UP, function (event) {
            console.log("this is player");
          });
        };

        _proto.update = function update(deltaTime) {};

        _proto.Initial = function Initial(card) {
          var _this2 = this;

          var z = card.node.parent.eulerAngles.z;
          var index = card.node.parent.parent.children.indexOf(card.node.parent);
          card.node.on(Node.EventType.MOUSE_ENTER, function () {
            if (!_this2.isDrop) {
              console.log("MOUSE_ENTER" + card.node.parent.name + card.node.parent.getSiblingIndex());
              card.node.parent.setSiblingIndex(100);
              console.log(card.node.parent.getSiblingIndex());
              tween(card.node).to(0.1, {
                position: new Vec3(card.node.position.x, 250, 0)
              }).start();
            }
          }, this);
          card.node.on(Node.EventType.MOUSE_LEAVE, function () {
            if (!_this2.isDrop) {
              console.log("MOUSE_LEAVE" + card.node.parent.name + card.node.parent.getSiblingIndex());
              tween(card.node).to(0.1, {
                position: new Vec3(card.node.position.x, 220, 0)
              }).start();
              card.node.parent.setSiblingIndex(index);
            }
          }, this);
          card.node.on(Node.EventType.MOUSE_DOWN, function (event) {
            if (!_this2.isDrop) {
              _this2.select = event.target;
              console.log("MOUSE_DOWN" + card.node.parent.name + card.node.parent.getSiblingIndex());
              card.node.parent.setSiblingIndex(1000);

              var pos = _this2.cam.screenToWorld(new Vec3(event.getLocationX(), event.getLocationY(), 0));

              card.node.setPosition(new Vec3(pos.x - 480, pos.y - 350 + 470, 0));
              card.node.parent.eulerAngles = new Vec3(0, 0, 0);
              _this2.startY = event.getLocationY();
              _this2.isDrop = true;
            }
          }, this);
          card.node.on(Node.EventType.MOUSE_UP, function (event) {
            event.preventSwallow = true; // console.log(event.target.name);
            // console.log(event.currentTarget.name);

            _this2.RemoveCard(); //未達到拖曳時，卡片回原位


            console.log(event.getLocationY() + "/" + _this2.startY);

            if (_this2.isDrop && event.getLocationY() - _this2.startY < 150) {
              console.log("MOUSE_UP" + card.node.parent.name + card.node.parent.getSiblingIndex());
              card.node.parent.setSiblingIndex(index);
              card.node.setPosition(_this2.Allpos[_this2.Center.children.indexOf(card.node.parent)]);
              card.node.parent.eulerAngles = new Vec3(0, 0, Math.floor(_this2.Center.children.length / 2) * 1 - _this2.Center.children.indexOf(card.node.parent) * 1);
            }

            _this2.isDrop = false;
          }, this);
          card.node.on(Node.EventType.TOUCH_MOVE, function (event) {
            if (_this2.isDrop) {
              //console.log("move" + card.node.parent.name + card.node.parent.getSiblingIndex())
              card.node.parent.setSiblingIndex(1000);

              var pos = _this2.cam.screenToWorld(new Vec3(event.getLocationX(), event.getLocationY(), 0));

              card.node.setPosition(new Vec3(pos.x - 480, pos.y - 350 + 470, 0));
            }
          }, this);
        };

        _proto.AddCard = function AddCard() {
          var obj = instantiate(this.source);
          this.Center.addChild(obj);
          this.Initial(obj.getComponentInChildren(Sprite));
          var len = this.Center.children.length;
          this.Allpos = [];

          for (var i = 0; i < len; i++) {
            console.log(-Math.floor(this.Center.children.length / 2) * 5 + i * 10);
            this.Allpos.push(new Vec3(-Math.floor(this.Center.children.length / 2) * 55 + i * 55, 220, 0));
            this.Center.children[i].children[0].setPosition(this.Allpos[i]);
            this.Center.children[i].eulerAngles = new Vec3(0, 0, Math.floor(this.Center.children.length / 2) * 1 - i * 1);
          }
        };

        _proto.RemoveCard = function RemoveCard() {};

        return CardViewer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cam", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cards", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "select", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Player", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Center", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "source", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CardViewer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameManager.ts', './GameData.ts', './GameClass.ts', './SoundManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Camera, Sprite, Node, Prefab, Layout, tween, Vec3, instantiate, Label, UIOpacity, Component, GameManager, GameData, SeatConvertMapSeat, SoundManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      Sprite = module.Sprite;
      Node = module.Node;
      Prefab = module.Prefab;
      Layout = module.Layout;
      tween = module.tween;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
      Label = module.Label;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      GameManager = module.GameManager;
    }, function (module) {
      GameData = module.GameData;
    }, function (module) {
      SeatConvertMapSeat = module.SeatConvertMapSeat;
    }, function (module) {
      SoundManager = module.SoundManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "18c78/U+7dEeYEo2y1mqQmk", "CardViewer", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CardViewer = exports('CardViewer', (_dec = ccclass('CardViewer'), _dec2 = property(Camera), _dec3 = property(Sprite), _dec4 = property(GameManager), _dec5 = property(Node), _dec6 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CardViewer, _Component);

        function CardViewer() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "cam", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "select", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "manager", _descriptor3, _assertThisInitialized(_this));

          _this.original = void 0;
          _this.isDrop = void 0;

          _initializerDefineProperty(_this, "Center", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "source", _descriptor5, _assertThisInitialized(_this));

          _this.startY = void 0;
          return _this;
        }

        var _proto = CardViewer.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        _proto.Initial = function Initial(card) {
          var _this2 = this;

          card.node.on(Node.EventType.MOUSE_ENTER, function (event) {
            if (!_this2.isDrop) {
              //console.log("MOUSE_ENTER" + card.node.parent.name + card.node.parent.getSiblingIndex());
              _this2.Center.getComponent(Layout).type = Layout.Type.NONE;
              card.node.parent.setSiblingIndex(100); //console.log(card.node.parent.getSiblingIndex());

              SoundManager.Instance.PlayContinueSEFX("SEFX_CardSelect");
              tween(card.node).to(0.1, {
                position: new Vec3(card.node.position.x, 220, 0)
              }).start();
            }
          }, this);
          card.node.on(Node.EventType.MOUSE_LEAVE, function () {
            if (!_this2.isDrop) {
              //console.log("MOUSE_LEAVE" + card.node.parent.name + card.node.parent.getSiblingIndex());
              tween(card.node).to(0.1, {
                position: new Vec3(card.node.position.x, 170, 0)
              }).start();
              card.node.parent.setSiblingIndex(Number(card.node.parent.name)); //this.Center.getComponent(Layout).type = Layout.Type.GRID;
              //this.Center.getComponent(Layout).type = Layout.Type.GRID;
            }
          }, this);
          card.node.on(Node.EventType.MOUSE_DOWN, function (event) {
            if (!_this2.isDrop) {
              _this2.select = card;
              _this2.Center.getComponent(Layout).type = Layout.Type.NONE; //console.log("MOUSE_DOWN" + card.node.parent.name + card.node.parent.getSiblingIndex());

              card.node.parent.setSiblingIndex(100);

              var pos = _this2.cam.screenToWorld(new Vec3(event.getLocationX(), event.getLocationY(), 0));

              card.node.parent.setPosition(new Vec3(pos.x - 480, pos.y - 40, 0)); //card.node.parent.eulerAngles = new Vec3(0, 0, 0);

              _this2.startY = event.getLocationY();
              _this2.isDrop = true; //取消玩家選擇範圍

              if (_this2.manager.selectCharaterData !== null) {
                _this2.manager.selectCharaterData.behaviorStatus = "idel";

                _this2.manager.mapData.Initial();

                _this2.manager.viewer.CancelShowRange();

                tween(_this2.manager.selectCharaterData.prefab).set({
                  position: _this2.manager.map.children[SeatConvertMapSeat(_this2.manager.selectCharaterData.seat, _this2.manager.mapData.mapRange)].position
                }).start();
                _this2.manager.selectCharaterData = null;

                _this2.manager.viewer.ShowBehaviorBtn();
              }
            }
          }, this);
          card.node.on(Node.EventType.MOUSE_UP, function (event) {
            // console.log(event.target.name);
            // console.log(event.currentTarget.name);
            //未達到拖曳時，卡片回原位
            //console.log(event.getLocationY() + "/" + this.startY)
            event.preventSwallow = true;

            _this2.manager.SetEffectIndex(card.node.parent.name);

            _this2.manager.isDrop = true; // if (this.isDrop && this.manager.effectTarget == null) {
            //     //console.log("MOUSE_UP" + card.node.parent.name + card.node.parent.getSiblingIndex());
            // }
            // //達到時發動效果
            // else if (this.isDrop && this.manager.effectTarget != null) {
            //     this.manager.isEffect = true;
            // }

            if (_this2.select == card) {
              _this2.HomingCard(Number(card.node.parent.name));

              _this2.isDrop = false;
            }

            _this2.SetCardAlpha(card.node, 255);
          }, this);
          card.node.on(Node.EventType.TOUCH_MOVE, function (event) {
            if (_this2.isDrop) {
              //console.log("move" + card.node.parent.name + card.node.parent.getSiblingIndex())
              card.node.parent.setSiblingIndex(100);

              var pos = _this2.cam.screenToWorld(new Vec3(event.getLocationX(), event.getLocationY(), 0));

              card.node.parent.setPosition(new Vec3(pos.x - 480, pos.y - 40, 0));
              SoundManager.Instance.PlayContinueSEFX("SEFX_CardMove");

              _this2.SetCardAlpha(card.node, 100);
            }
          }, this);
        };

        _proto.AddCard = function AddCard(amount, cardID) {
          //console.table(cardID);
          for (var i = 0; i < amount; i++) {
            var obj = instantiate(this.source);
            this.Center.addChild(obj);
            obj.name = (this.Center.children.length - 1).toString();
            this.Initial(obj.getComponentInChildren(Sprite));
            this.RefreshCardInfo(obj, cardID[i]);
          }

          var len = this.Center.children.length;
          this.Center.getComponent(Layout).type = Layout.Type.GRID;
        } // ResetCard() {
        //     let len = this.Center.children.length;
        //     this.Allpos = [];
        //     for (let i = 0; i < len; i++) {
        //         console.log((- Math.floor(this.Center.children.length / 2)) * 5 + i * 10);
        //         this.Allpos.push(new Vec3((- Math.floor(this.Center.children.length / 2) * 55 + i * 55), 220, 0));
        //         this.Center.children[i].children[0].setPosition(this.Allpos[i]);
        //         this.Center.children[i].eulerAngles = new Vec3(0, 0, (Math.floor(this.Center.children.length / 2) * 1 - i * 1));
        //     }
        // }
        ;

        _proto.HomingCard = function HomingCard(index) {
          this.select.node.parent.setSiblingIndex(index);
          this.Center.getComponent(Layout).type = Layout.Type.GRID; //this.select.node.setPosition(this.Allpos[this.Center.children.indexOf(this.select.node.parent)]);
          //this.select.node.parent.eulerAngles = new Vec3(0, 0, (Math.floor(this.Center.children.length / 2)) * 1 - this.Center.children.indexOf(this.select.node.parent) * 1);
        };

        _proto.RemoveCard = function RemoveCard() {
          this.select.node.parent.destroy(); //this.select.node.parent.active = false;

          this.select = null; //this.ResetCard();
        };

        _proto.RefreshCardInfo = function RefreshCardInfo(Card, CardID) {
          var header = Card.children[0].getChildByName("Txt_Header").getComponent(Label);
          var content = Card.children[0].getChildByName("Txt_Content").getComponent(Label);
          var data = null;
          GameData.Instance.cardDatas.forEach(function (element) {
            if (element.CardID == CardID) data = element;
          });

          try {
            header.string = data.CardName;
            content.string = data.Description;
          } catch (error) {
            console.log("找不到此卡片資料");
          }
        };

        _proto.SetCardAlpha = function SetCardAlpha(card, num) {
          card.getComponent(UIOpacity).opacity = num;
        };

        return CardViewer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cam", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "select", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "manager", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Center", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "source", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CharacterViewer.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Vec3;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "98228KZNBJPtpvh0BHYp1g+", "CharacterViewer", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CharacterViewer = exports('CharacterViewer', (_dec = ccclass('CharacterViewer'), _dec(_class = function CharacterViewer(sprite, animation, characterTag) {
        this.sprite = void 0;
        this.sprite = sprite;
        var scale = this.sprite.node.parent.scale;
        this.sprite.node.parent.scale = characterTag === "Friendly" ? scale : new Vec3(-scale.x, scale.y, scale.z);
      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EffectManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SoundManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Animation, Component, tween, Vec3, easing, SoundManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Animation = module.Animation;
      Component = module.Component;
      tween = module.tween;
      Vec3 = module.Vec3;
      easing = module.easing;
    }, function (module) {
      SoundManager = module.SoundManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "bc397ZCKX1LAaZejnK9o5OH", "EffectManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var EffectManager = exports('EffectManager', (_dec = ccclass('EffectManager'), _dec2 = property(Label), _dec3 = property(Animation), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EffectManager, _Component);

        function EffectManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "HartLabels", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "HitAnimations", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = EffectManager.prototype;

        _proto.HurtEffect = /*#__PURE__*/function () {
          var _HurtEffect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(pos, value) {
            var _this2 = this;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", new Promise(function (res) {
                      var _loop = function _loop(i) {
                        if (!_this2.HartLabels[i].node.activeInHierarchy) {
                          _this2.HartLabels[i].string = "-" + value.toString();
                          _this2.HartLabels[i].node.active = true;
                          SoundManager.Instance.PlaySEFX("SEFX_Damage");
                          tween(_this2.HartLabels[i].node).set({
                            position: new Vec3(pos.x, pos.y + 20, pos.z)
                          }).by(0.4, {
                            position: new Vec3(0, 20, 0)
                          }, {
                            easing: easing.quintOut
                          }).call(function () {
                            _this2.HartLabels[i].node.active = false;
                            console.log("gggg");
                            res();
                          }).start();
                          return "break";
                        }
                      };

                      for (var i = 0; i < _this2.HartLabels.length; i++) {
                        var _ret = _loop(i);

                        if (_ret === "break") break;
                      }
                    }));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function HurtEffect(_x, _x2) {
            return _HurtEffect.apply(this, arguments);
          }

          return HurtEffect;
        }();

        _proto.HitEffect = function HitEffect(pos, EffectName) {
          var _this3 = this;

          var _loop2 = function _loop2(i) {
            if (!_this3.HitAnimations[i].node.activeInHierarchy) {
              tween(_this3.HitAnimations[i].node).set({
                position: pos
              }).call(function () {
                _this3.HitAnimations[i].node.active = true;

                _this3.HitAnimations[i].play(EffectName);

                _this3.HitAnimations[i].on(Animation.EventType.FINISHED, function () {
                  _this3.HitAnimations[i].node.active = false;
                }, _this3);

                console.log("hit_eff");
              }).start();
              return "break";
            }
          };

          for (var i = 0; i < this.HitAnimations.length; i++) {
            var _ret2 = _loop2(i);

            if (_ret2 === "break") break;
          }
        };

        return EffectManager;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "HartLabels", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "HitAnimations", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameClass.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, CCInteger, CCString, Node, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCInteger = module.CCInteger;
      CCString = module.CCString;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      exports({
        MapSeatConvertSeat: MapSeatConvertSeat,
        SeatConvertMapSeat: SeatConvertMapSeat,
        Status: void 0,
        targetDistance: targetDistance
      });

      var _dec, _class, _dec2, _dec3, _dec4, _dec5, _dec6, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _dec7, _dec8, _dec9, _class5, _class6, _descriptor5, _descriptor6, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _class8, _class9, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _dec24, _dec25, _dec26, _class11, _class12, _descriptor20, _descriptor21;

      cclegacy._RF.push({}, "d42d9Y3QVVC84+RxcaDXsnt", "GameClass", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GameClass = exports('GameClass', (_dec = ccclass('GameClass'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameClass, _Component);

        function GameClass() {
          return _Component.apply(this, arguments) || this;
        }

        return GameClass;
      }(Component)) || _class));
      var Player = exports('Player', (_dec2 = ccclass('Player'), _dec3 = property(CCInteger), _dec4 = property(CCInteger), _dec5 = property(CCInteger), _dec6 = property(CCInteger), _dec2(_class2 = (_class3 = function Player() {
        _initializerDefineProperty(this, "maxCost", _descriptor, this);

        _initializerDefineProperty(this, "currentCost", _descriptor2, this);

        _initializerDefineProperty(this, "maxEnergy", _descriptor3, this);

        _initializerDefineProperty(this, "currentEnergy", _descriptor4, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "maxCost", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "currentCost", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "maxEnergy", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "currentEnergy", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class3)) || _class2));
      var Seat = exports('Seat', (_dec7 = ccclass('Seat'), _dec8 = property(CCInteger), _dec9 = property(CCInteger), _dec7(_class5 = (_class6 = /*#__PURE__*/function () {
        function Seat(x, y) {
          _initializerDefineProperty(this, "x", _descriptor5, this);

          _initializerDefineProperty(this, "y", _descriptor6, this);

          this.x = x == undefined ? 0 : x;
          this.y = y == undefined ? 0 : y;
        }

        var _proto = Seat.prototype;

        _proto.Add = function Add(seat) {
          return new Seat(this.x + seat[0], this.y + seat[1]);
        };

        _proto.CheakTheSame = function CheakTheSame(seat) {
          if (seat.x == this.x && seat.y == this.y) return true;
          return false;
        };

        return Seat;
      }(), (_descriptor5 = _applyDecoratedDescriptor(_class6.prototype, "x", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class6.prototype, "y", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class6)) || _class5));
      var Character = exports('Character', (_dec10 = ccclass('Character'), _dec11 = property(CCString), _dec12 = property(CCString), _dec13 = property(Node), _dec14 = property(Seat), _dec15 = property(CCInteger), _dec16 = property(CCInteger), _dec17 = property(CCInteger), _dec18 = property(CCInteger), _dec19 = property(CCInteger), _dec20 = property(CCInteger), _dec21 = property(CCInteger), _dec22 = property(CCString), _dec23 = property(CCString), _dec10(_class8 = (_class9 = function Character() {
        _initializerDefineProperty(this, "name", _descriptor7, this);

        _initializerDefineProperty(this, "tag", _descriptor8, this);

        _initializerDefineProperty(this, "prefab", _descriptor9, this);

        _initializerDefineProperty(this, "seat", _descriptor10, this);

        _initializerDefineProperty(this, "basAtk", _descriptor11, this);

        _initializerDefineProperty(this, "currentMoveRange", _descriptor12, this);

        _initializerDefineProperty(this, "currentAtk", _descriptor13, this);

        _initializerDefineProperty(this, "maxHp", _descriptor14, this);

        _initializerDefineProperty(this, "currentHp", _descriptor15, this);

        _initializerDefineProperty(this, "maxDef", _descriptor16, this);

        _initializerDefineProperty(this, "currentDef", _descriptor17, this);

        _initializerDefineProperty(this, "behaviorStatus", _descriptor18, this);

        _initializerDefineProperty(this, "armTag", _descriptor19, this);

        this.Arm = null;
      }, (_descriptor7 = _applyDecoratedDescriptor(_class9.prototype, "name", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '預設名稱';
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class9.prototype, "tag", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'Friendly';
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class9.prototype, "prefab", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class9.prototype, "seat", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Seat(0, 0);
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class9.prototype, "basAtk", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class9.prototype, "currentMoveRange", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class9.prototype, "currentAtk", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class9.prototype, "maxHp", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class9.prototype, "currentHp", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class9.prototype, "maxDef", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class9.prototype, "currentDef", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class9.prototype, "behaviorStatus", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "idel";
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class9.prototype, "armTag", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "Saber";
        }
      })), _class9)) || _class8));
      var Card = exports('Card', (_dec24 = ccclass('Card'), _dec25 = property(CCString), _dec26 = property(CCInteger), _dec24(_class11 = (_class12 = function Card() {
        _initializerDefineProperty(this, "cardID", _descriptor20, this);

        _initializerDefineProperty(this, "amount", _descriptor21, this);
      }, (_descriptor20 = _applyDecoratedDescriptor(_class12.prototype, "cardID", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class12.prototype, "amount", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class12)) || _class11));

      function SeatConvertMapSeat(seat, maprange) {
        return seat.y * maprange.x + seat.x;
      }

      function MapSeatConvertSeat(mapSeat, maprange) {
        return new Seat(mapSeat % maprange.x, Math.floor(mapSeat / maprange.x));
      }

      function targetDistance(selfSeat, targetSeat) {
        return Math.abs(selfSeat.x - targetSeat.x) + Math.abs(selfSeat.y - targetSeat.y);
      }

      var Status;

      (function (Status) {
        Status[Status["Idel"] = 0] = "Idel";
        Status[Status["Attack"] = 1] = "Attack";
        Status[Status["damage"] = 2] = "damage";
      })(Status || (Status = exports('Status', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameData.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameClass.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, cclegacy, _decorator, CCString, CCInteger, director, Component, Character;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCString = module.CCString;
      CCInteger = module.CCInteger;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      Character = module.Character;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _dec7, _dec8, _dec9, _class4, _class5, _descriptor6, _descriptor7, _dec10, _dec11, _dec12, _dec13, _class7, _class8, _descriptor8, _descriptor9, _descriptor10, _class9;

      cclegacy._RF.push({}, "9880eHxlOZGhLVBA2xTXECq", "GameData", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CardData = exports('CardData', (_dec = ccclass("CardData"), _dec2 = property(CCString), _dec3 = property(CCString), _dec4 = property(CCInteger), _dec5 = property(CCInteger), _dec6 = property(CCString), _dec(_class = (_class2 = function CardData() {
        _initializerDefineProperty(this, "CardID", _descriptor, this);

        _initializerDefineProperty(this, "CardName", _descriptor2, this);

        _initializerDefineProperty(this, "Cost", _descriptor3, this);

        _initializerDefineProperty(this, "Value", _descriptor4, this);

        _initializerDefineProperty(this, "Description", _descriptor5, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "CardID", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "CardName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Cost", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Value", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Description", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class));
      var StageData = exports('StageData', (_dec7 = ccclass("StageData"), _dec8 = property(CCInteger), _dec9 = property(Character), _dec7(_class4 = (_class5 = function StageData() {
        _initializerDefineProperty(this, "stageID", _descriptor6, this);

        _initializerDefineProperty(this, "charatersDatas", _descriptor7, this);
      }, (_descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "stageID", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "charatersDatas", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class5)) || _class4));
      var GameData = exports('GameData', (_dec10 = ccclass('GameData'), _dec11 = property(CCInteger), _dec12 = property(CardData), _dec13 = property(StageData), _dec10(_class7 = (_class8 = (_class9 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameData, _Component);

        function GameData() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "currentStage", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cardDatas", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "stageCharatersData", _descriptor10, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = GameData.prototype;

        _proto.onLoad = function onLoad() {
          if (GameData.Instance == null) {
            GameData.Instance = this;
          }

          director.addPersistRootNode(this.node.parent);
        };

        _proto.GetStageData = function GetStageData() {
          var ary = [];
          this.stageCharatersData[this.currentStage].charatersDatas.forEach(function (data) {
            ary.push(Object.assign({}, data));
          });
          return ary;
        };

        _proto.SetStage = function SetStage(index) {
          this.currentStage = index;
        };

        return GameData;
      }(Component), _class9.Instance = null, _class9), (_descriptor8 = _applyDecoratedDescriptor(_class8.prototype, "currentStage", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class8.prototype, "cardDatas", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class8.prototype, "stageCharatersData", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class8)) || _class7));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Arms.ts', './GameViewer.ts', './GameClass.ts', './MoveManager.ts', './CardManager.ts', './GameData.ts', './EffectManager.ts', './SoundManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, CCString, Node, Prefab, Layout, instantiate, Sprite, Color, tween, Component, Vec3, Archer, Saber, GameViewer, Seat, Character, Player, Card, SeatConvertMapSeat, targetDistance, MapSeatConvertSeat, MoveManager, CardManager, GameData, EffectManager, SoundManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCString = module.CCString;
      Node = module.Node;
      Prefab = module.Prefab;
      Layout = module.Layout;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      Color = module.Color;
      tween = module.tween;
      Component = module.Component;
      Vec3 = module.Vec3;
    }, function (module) {
      Archer = module.Archer;
      Saber = module.Saber;
    }, function (module) {
      GameViewer = module.GameViewer;
    }, function (module) {
      Seat = module.Seat;
      Character = module.Character;
      Player = module.Player;
      Card = module.Card;
      SeatConvertMapSeat = module.SeatConvertMapSeat;
      targetDistance = module.targetDistance;
      MapSeatConvertSeat = module.MapSeatConvertSeat;
    }, function (module) {
      MoveManager = module.MoveManager;
    }, function (module) {
      CardManager = module.CardManager;
    }, function (module) {
      GameData = module.GameData;
    }, function (module) {
      EffectManager = module.EffectManager;
    }, function (module) {
      SoundManager = module.SoundManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;

      cclegacy._RF.push({}, "d4ebecdKeBN172SD66punFI", "GameManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GameManager = exports('GameManager', (_dec = ccclass('GameManager'), _dec2 = property(CCString), _dec3 = property(Node), _dec4 = property(Seat), _dec5 = property(Prefab), _dec6 = property(Node), _dec7 = property(Prefab), _dec8 = property(Character), _dec9 = property(Player), _dec10 = property(Character), _dec11 = property(Seat), _dec12 = property(Card), _dec13 = property(CardManager), _dec14 = property(EffectManager), _dec15 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameManager, _Component);

        function GameManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "turnStatus", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "map", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mapRange", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mapPrefab", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "charaters", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "charaterPrefab", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "charatersData", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "playerData", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "selectCharaterData", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "targetSeat", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "CardGroupData", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cardManager", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "effectManager", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "effectTarget", _descriptor14, _assertThisInitialized(_this));

          _this.currentEffectIndex = 0;
          _this.isEffect = false;
          _this.isDrop = false;
          _this.mapData = null;
          _this.viewer = void 0;
          _this.mapSprite = [];
          return _this;
        }

        var _proto = GameManager.prototype;

        _proto.start = function start() {
          var _this2 = this;

          this.Initial(); //註冊按鈕

          this.RegisterButton(); //等待Layout元件更新完畢，更新視覺效果

          setTimeout(function () {
            _this2.viewer.Initial(_this2);
          }, 100);
        };

        _proto.update = function update(dt) {};

        _proto.Initial = function Initial() {
          var _this3 = this;

          SoundManager.Instance.PlayBGM("MainBattle02", true);
          this.viewer = this.node.getComponent(GameViewer); //Initial Map

          var layout = this.map.getComponent(Layout);
          this.charatersData = GameData.Instance.GetStageData();
          this.mapData = new MoveManager(this.charatersData, this.mapRange);
          this.cardManager = new CardManager(this.CardGroupData);
          layout.constraintNum = this.mapRange.x;

          for (var i = 0; i < this.mapRange.x * this.mapRange.y; i++) {
            var node = instantiate(this.mapPrefab);
            node.name = 'm' + i;
            var sprite = node.getComponent(Sprite);
            this.map.addChild(node);
            this.mapSprite.push(sprite);
          } //Initial Character


          var _loop = function _loop(_i) {
            var node = instantiate(_this3.charaterPrefab);
            _this3.charatersData[_i].prefab = node;

            _this3.charaters.addChild(node);

            node.setPosition(_this3.map.children[SeatConvertMapSeat(_this3.charatersData[_i].seat, _this3.mapRange)].position);
            var character = _this3.charatersData[_i];

            switch (character.armTag) {
              case "Saber":
                {
                  character.Arm = new Saber(character, _this3, _this3.viewer);
                  break;
                }

              case "Archer":
                {
                  character.Arm = new Archer(character, _this3, _this3.viewer);
                  break;
                }
            }

            character.prefab.getChildByName("Btn_character").on(Node.EventType.MOUSE_UP, function () {
              if (_this3.isDrop) {
                var success = _this3.UseEffectSuccess(character);

                if (success) {
                  _this3.viewer.UseCard();

                  _this3.viewer.RefreshCurrentPlayerInfo(_this3.playerData);
                }

                _this3.isDrop = false;
              }
            });

            _this3.viewer.InitialSmallCharacterStatus(character);
          };

          for (var _i = 0; _i < this.charatersData.length; _i++) {
            _loop(_i);
          } //Initial Player


          this.PlayerInitial();
          this.cardManager.TakeCard(5);
          this.viewer.TakeCardAni(5, this.cardManager.HandleCard);
        };

        _proto.RegisterButton = function RegisterButton() {
          var _this4 = this;

          this.charatersData.forEach(function (character) {
            character.prefab.getChildByName("Btn_character").on(Node.EventType.MOUSE_ENTER, function () {
              if (character.tag != "Enemy") {
                if (_this4.selectCharaterData == null) _this4.viewer.RenderAttackRange(character.Arm.GetAttackRange(character.seat), Color.YELLOW);else if (_this4.selectCharaterData == character) _this4.viewer.RenderAttackRange(character.Arm.GetAttackRange(_this4.targetSeat), Color.YELLOW);else _this4.viewer.RenderAttackRange(character.Arm.GetAttackRange(character.seat), Color.YELLOW);
              }

              _this4.isDrop = false;
            }, _this4);
            character.prefab.getChildByName("Btn_character").on(Node.EventType.MOUSE_LEAVE, function () {
              if (character.tag != "Enemy") {
                _this4.viewer.CancelShowRange();
              }
            }, _this4);
            character.prefab.getChildByName("Btn_character").on('click', function () {
              _this4.TouchMove(character);

              _this4.viewer.ShowBehaviorBtn();

              _this4.viewer.RefreshCurrentCharacterInfo(character);
            }, _this4);
          }); //註冊座標點擊事件

          var len = this.map.children.length;

          var _loop2 = function _loop2(i) {
            var seat = MapSeatConvertSeat(i, _this4.mapRange);

            _this4.map.children[i].on(Node.EventType.MOUSE_DOWN, function () {
              if (_this4.turnStatus == "Friendly") {
                if (_this4.mapData.SearchSeatCanArrived(seat)) {
                  console.log("可以移動到這裡");
                  _this4.targetSeat = MapSeatConvertSeat(i, _this4.mapRange);
                  SoundManager.Instance.PlaySEFX("SEFX_FriendMove");
                  tween(_this4.selectCharaterData.prefab).set({
                    position: _this4.map.children[i].position
                  }).start();
                } else {
                  console.log("不可以移到這裡");

                  if (_this4.selectCharaterData !== null) {
                    _this4.selectCharaterData.behaviorStatus = "idel";

                    _this4.mapData.Initial();

                    _this4.viewer.CancelShowRange();

                    SoundManager.Instance.PlaySEFX("SEFX_Cancel");
                    tween(_this4.selectCharaterData.prefab).set({
                      position: _this4.map.children[SeatConvertMapSeat(_this4.selectCharaterData.seat, _this4.mapData.mapRange)].position
                    }).start();
                    _this4.selectCharaterData = null;
                  }
                }

                _this4.viewer.ShowBehaviorBtn();
              }
            }, _this4);
          };

          for (var i = 0; i < len; i++) {
            _loop2(i);
          }
        } //#region move行為
        ;

        _proto.PlayerInitial = function PlayerInitial() {
          this.playerData.currentEnergy = this.playerData.maxEnergy;
          this.playerData.currentCost = this.playerData.maxCost;
          this.viewer.RefreshCurrentPlayerInfo(this.playerData);
        };

        _proto.InitialDemoMove = function InitialDemoMove() {
          tween(this.selectCharaterData.prefab).set({
            position: this.mapSprite[SeatConvertMapSeat(this.selectCharaterData.seat, this.mapData.mapRange)].node.position
          }).start();
          this.selectCharaterData.behaviorStatus = "idel";
          this.mapData.Initial();
          this.viewer.CancelShowRange();
          SoundManager.Instance.PlaySEFX("SEFX_Cancel");
          this.selectCharaterData = null;
        };

        _proto.EnsureMove = function EnsureMove() {
          this.playerData.currentEnergy -= targetDistance(this.selectCharaterData.seat, this.targetSeat);
          this.selectCharaterData.seat = this.targetSeat;
          this.InitialDemoMove();
          this.viewer.RefreshCurrentPlayerInfo(this.playerData);
          this.viewer.ShowBehaviorBtn();
        };

        _proto.TouchMove = function TouchMove(character) {
          var _this5 = this;

          if (character.tag != "Enemy") {
            if (character.behaviorStatus === "idel") {
              SoundManager.Instance.PlaySEFX("SEFX_CharacterSelect");
              this.charatersData.forEach(function (data) {
                if (data.behaviorStatus === "moving") {
                  _this5.InitialDemoMove();
                }
              });
              this.targetSeat = character.seat;
              this.selectCharaterData = character;
              this.selectCharaterData.behaviorStatus = "moving";
              this.mapData.MoveInitial(character.seat, character.currentMoveRange <= this.playerData.currentEnergy ? character.currentMoveRange : this.playerData.currentEnergy);
              this.viewer.RenderMoveRange();
            } else {
              // tween(this.selectCharaterData.prefab).set({ position: this.map.children[SeatConvertMapSeat(this.selectCharaterData.seat, this.mapData.mapRange)].position }).start();
              // this.selectCharaterData.behaviorStatus = "idel";
              // this.selectCharaterData = null;
              // this.mapData.Initial();
              // this.viewer.CancelShowRange();
              this.EnsureMove();
              SoundManager.Instance.PlaySEFX("SEFX_Cancel");
            }
          }
        } //#endregion
        //#region battle行為
        ;

        _proto.SearchCharacterInSeat = function SearchCharacterInSeat(seats) {
          var _this6 = this;

          var characters = [];
          seats.forEach(function (seat) {
            for (var i = 0; i < _this6.charatersData.length; i++) {
              if (seat.x === _this6.charatersData[i].seat.x && seat.y === _this6.charatersData[i].seat.y) {
                characters.push(_this6.charatersData[i]);
                break;
              }
            }
          });
          return characters;
        };

        _proto.ChangeTurn = function ChangeTurn() {
          this.turnStatus = "Enemy";
          this.EnemyAction();
        };

        _proto.EnemyAction = /*#__PURE__*/function () {
          var _EnemyAction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this7 = this;

            var _loop3, i, takeCardAmount;

            return _regeneratorRuntime().wrap(function _callee$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.viewer.HideBehaviorBtn();
                    this.viewer.CleanHandleCard(); //清理格檔值

                    this.charatersData.forEach(function (data) {
                      if (data.tag == "Enemy") {
                        data.maxDef = 0;
                        data.currentDef = 0;

                        _this7.viewer.RefreshSmallCharacterStatus(data);
                      }
                    });
                    _loop3 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop3(i) {
                      var hasAttack, canAtttack, charas, _i2, _canAtttack, _charas, _i4;

                      return _regeneratorRuntime().wrap(function _loop3$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              hasAttack = false; //console.log("p1")

                              if (!(_this7.charatersData[i].tag === "Enemy")) {
                                _context.next = 37;
                                break;
                              } ///攻擊目標里有敵人時，進行攻擊


                              canAtttack = false;
                              charas = _this7.SearchCharacterInSeat(_this7.charatersData[i].Arm.GetAttackRange(_this7.charatersData[i].seat));
                              _i2 = 0;

                            case 5:
                              if (!(_i2 < charas.length)) {
                                _context.next = 13;
                                break;
                              }

                              if (!(charas[_i2].tag != "Enemy")) {
                                _context.next = 10;
                                break;
                              }

                              canAtttack = true;
                              hasAttack = true;
                              return _context.abrupt("break", 13);

                            case 10:
                              _i2++;
                              _context.next = 5;
                              break;

                            case 13:
                              if (!canAtttack) {
                                _context.next = 18;
                                break;
                              }

                              _context.next = 16;
                              return _this7.charatersData[i].Arm.Attack(_this7.charatersData[i].seat);

                            case 16:
                              _context.next = 20;
                              break;

                            case 18:
                              _context.next = 20;
                              return new Promise(function (res) {
                                var target = null;

                                var _loop4 = function _loop4(a) {
                                  if (_this7.charatersData[a].tag !== "Enemy") {
                                    //console.log("ddddd");
                                    var moveRange = [[-1, 0], [1, 0], [0, 1], [0, -1]];
                                    var seats = [];
                                    moveRange.forEach(function (element) {
                                      //console.log("sssss");
                                      var seat = _this7.charatersData[a].seat.Add(element);

                                      if (seat.x >= 0 && seat.x < _this7.mapRange.x && seat.y >= 0 && seat.y < _this7.mapRange.y) seats.push(seat);
                                    });
                                    seats.forEach(function (seat) {
                                      //console.log(seat);
                                      if (_this7.mapData.BigMap[seat.y][seat.x]) {
                                        if (target == null) {
                                          target = {
                                            distant: targetDistance(_this7.charatersData[i].seat, seat),
                                            data: _this7.charatersData[a],
                                            targetSeat: seat
                                          };
                                        } else if (targetDistance(_this7.charatersData[i].seat, seat) <= target.distant) {
                                          target = {
                                            distant: targetDistance(_this7.charatersData[i].seat, seat),
                                            data: _this7.charatersData[a],
                                            targetSeat: seat
                                          };
                                        }
                                      }
                                    }); //當目標四周都被擋住 朝最近目標座標靠

                                    if (target == null) {
                                      target = {
                                        distant: targetDistance(_this7.charatersData[i].seat, _this7.charatersData[a].seat),
                                        data: _this7.charatersData[a],
                                        targetSeat: _this7.charatersData[a].seat
                                      };
                                    }
                                  }
                                };

                                for (var a = 0; a < _this7.charatersData.length; a++) {
                                  _loop4(a);
                                }

                                _this7.mapData.MoveInitial(_this7.charatersData[i].seat, _this7.charatersData[i].currentMoveRange);

                                var targetMoveSeat = null; //console.table("目標:");
                                //console.table(target.targetSeat);

                                for (var _i3 = 0; _i3 < _this7.mapRange.y; _i3++) {
                                  for (var _a = 0; _a < _this7.mapRange.x; _a++) {
                                    if (_this7.mapData.moveMap[_i3][_a].canArrvied) {
                                      if (targetMoveSeat == null) {
                                        targetMoveSeat = {
                                          distant: targetDistance(new Seat(_a, _i3), target.targetSeat),
                                          seat: new Seat(_a, _i3)
                                        }; //console.table(targetMoveSeat);
                                      } else if (targetDistance(new Seat(_a, _i3), target.targetSeat) <= targetMoveSeat.distant) {
                                        targetMoveSeat = {
                                          distant: targetDistance(new Seat(_a, _i3), target.targetSeat),
                                          seat: new Seat(_a, _i3)
                                        }; //console.table(targetMoveSeat);
                                      }
                                    }
                                  }
                                }

                                if (targetMoveSeat.seat != null) if (!targetMoveSeat.seat.CheakTheSame(_this7.charatersData[i].seat)) {
                                  _this7.charatersData[i].seat = targetMoveSeat.seat;

                                  var pos = _this7.mapSprite[SeatConvertMapSeat(targetMoveSeat.seat, _this7.mapData.mapRange)].node.position;

                                  SoundManager.Instance.PlaySEFX("SEFX_EnemyMove");
                                  var obj = _this7.charatersData[i].prefab;

                                  if (obj.position.x >= pos.x) {
                                    obj.scale = new Vec3(-Math.abs(obj.scale.x), obj.scale.y, obj.scale.y);
                                  } else {
                                    obj.scale = new Vec3(Math.abs(obj.scale.x), obj.scale.y, obj.scale.y);
                                  }

                                  tween(_this7.charatersData[i].prefab).by(0.2, {
                                    position: new Vec3(pos.x - _this7.charatersData[i].prefab.position.x, 0, 0)
                                  }).by(0.2, {
                                    position: new Vec3(0, pos.y - _this7.charatersData[i].prefab.position.y, 0)
                                  }).call(res).start();
                                } else res();
                              });

                            case 20:
                              if (hasAttack) {
                                _context.next = 37;
                                break;
                              } ///攻擊目標里有敵人時，進行攻擊


                              _canAtttack = false;
                              _charas = _this7.SearchCharacterInSeat(_this7.charatersData[i].Arm.GetAttackRange(_this7.charatersData[i].seat));
                              _i4 = 0;

                            case 24:
                              if (!(_i4 < _charas.length)) {
                                _context.next = 32;
                                break;
                              }

                              if (!(_charas[_i4].tag != "Enemy")) {
                                _context.next = 29;
                                break;
                              }

                              _canAtttack = true;
                              hasAttack = true;
                              return _context.abrupt("break", 32);

                            case 29:
                              _i4++;
                              _context.next = 24;
                              break;

                            case 32:
                              if (!_canAtttack) {
                                _context.next = 37;
                                break;
                              }

                              console.log(_this7.charatersData[i].name + " ssss");

                              _this7.viewer.HideBehaviorBtn();

                              _context.next = 37;
                              return _this7.charatersData[i].Arm.Attack(_this7.charatersData[i].seat);

                            case 37:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _loop3);
                    });
                    i = 0;

                  case 5:
                    if (!(i < this.charatersData.length)) {
                      _context2.next = 10;
                      break;
                    }

                    return _context2.delegateYield(_loop3(i), "t0", 7);

                  case 7:
                    i++;
                    _context2.next = 5;
                    break;

                  case 10:
                    //換回玩家回合
                    this.turnStatus = "Friendly";
                    this.mapData.Initial();
                    this.PlayerInitial(); //清理格檔值

                    this.charatersData.forEach(function (data) {
                      if (data.tag == "Friendly") {
                        data.maxDef = 0;
                        data.currentDef = 0;

                        _this7.viewer.RefreshSmallCharacterStatus(data);
                      }
                    });
                    this.cardManager.InitialCardGroup(this.CardGroupData);
                    takeCardAmount = this.cardManager.currentCardGroup.length >= 5 ? 5 : this.cardManager.currentCardGroup.length;
                    this.cardManager.TakeCard(takeCardAmount);
                    this.viewer.TakeCardAni(takeCardAmount, this.cardManager.HandleCard);
                    this.viewer.ShowBehaviorBtn();
                    return _context2.abrupt("return", true);

                  case 20:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee, this);
          }));

          function EnemyAction() {
            return _EnemyAction.apply(this, arguments);
          }

          return EnemyAction;
        }();

        _proto.SetEffectIndex = function SetEffectIndex(index) {
          this.currentEffectIndex = Number(index);
        };

        _proto.UseEffectSuccess = function UseEffectSuccess(target) {
          var cardID = Number(this.cardManager.HandleCard[this.currentEffectIndex]);
          var cardData = null;

          for (var i = 0; i < GameData.Instance.cardDatas.length; i++) {
            if (GameData.Instance.cardDatas[i].CardID == cardID.toString()) {
              {
                cardData = GameData.Instance.cardDatas[i];
                break;
              }
            }
          }

          if (this.playerData.currentCost >= cardData.Cost) {
            switch (cardID) {
              case 0:
                console.error("確認資料技能效果id是否填錯");
                return false;

              case 1:
                if (target.tag == "Friendly") {
                  target.Arm.Attack(target.seat);
                  console.log("攻擊");
                  this.playerData.currentCost -= cardData.Cost;
                  return true;
                }

                console.log("無法攻擊");
                return false;

              case 2:
                if (target.tag == "Friendly") {
                  //target.Arm.Attack(target.seat);
                  this.playerData.currentCost -= cardData.Cost;
                  target.maxDef += cardData.Value;
                  target.currentDef += cardData.Value;
                  console.log("增加格檔值");
                  this.viewer.RefreshSmallCharacterStatus(target);
                  return true;
                }

                console.log("錯誤，方法ID:2");
                return false;

              default:
                console.error("確認資料技能效果id是否填錯");
                return false;
            }
          }
        } //#endregion
        ;

        _proto.GetMapPos = function GetMapPos(seat) {
          return this.mapSprite[SeatConvertMapSeat(seat, this.mapData.mapRange)].node.position;
        };

        _proto.CheckMatch = function CheckMatch() {
          var _this8 = this;

          var friend = false;
          var Enemy = false;
          this.charatersData.forEach(function (data) {
            if (data.currentHp <= 0) {
              data.prefab.destroy();

              _this8.charatersData.splice(_this8.charatersData.indexOf(data), 1);
            }
          });

          for (var i = 0; i < this.charatersData.length; i++) {
            if (!friend) {
              if (this.charatersData[i].tag == "Friendly") {
                friend = true;
              }
            }
          }

          for (var _i5 = 0; _i5 < this.charatersData.length; _i5++) {
            if (!Enemy) {
              if (this.charatersData[_i5].tag == "Enemy") {
                Enemy = true;
              }
            }
          }

          if (!friend) return "Defeat";else if (!Enemy) return "Victory";else return "Matching";
        };

        return GameManager;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "turnStatus", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "Friendly";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "map", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mapRange", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "mapPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "charaters", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "charaterPrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "charatersData", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "playerData", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Player();
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "selectCharaterData", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "targetSeat", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Seat(0, 0);
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "CardGroupData", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "cardManager", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "effectManager", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "effectTarget", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameViewer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './StatusViewer.ts', './GameClass.ts', './PlayerViewer.ts', './CharacterViewer.ts', './MapViewer.ts', './CardViewer.ts', './SmallCharacterViewer.ts', './EffectManager.ts', './SoundManager.ts', './ResultViewer.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Camera, Button, Sprite, Animation, Color, Component, StatusViewer, SeatConvertMapSeat, Seat, PlayerViewer, CharacterViewer, MapViewer, CardViewer, SmallCharacterViewer, EffectManager, SoundManager, ResultViewer;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      Button = module.Button;
      Sprite = module.Sprite;
      Animation = module.Animation;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      StatusViewer = module.StatusViewer;
    }, function (module) {
      SeatConvertMapSeat = module.SeatConvertMapSeat;
      Seat = module.Seat;
    }, function (module) {
      PlayerViewer = module.PlayerViewer;
    }, function (module) {
      CharacterViewer = module.CharacterViewer;
    }, function (module) {
      MapViewer = module.MapViewer;
    }, function (module) {
      CardViewer = module.CardViewer;
    }, function (module) {
      SmallCharacterViewer = module.SmallCharacterViewer;
    }, function (module) {
      EffectManager = module.EffectManager;
    }, function (module) {
      SoundManager = module.SoundManager;
    }, function (module) {
      ResultViewer = module.ResultViewer;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

      cclegacy._RF.push({}, "b108aKU+jlB8JmkZFaaxFk9", "GameViewer", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GameViewer = exports('GameViewer', (_dec = ccclass('GameViewer'), _dec2 = property(Camera), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(StatusViewer), _dec6 = property(StatusViewer), _dec7 = property(PlayerViewer), _dec8 = property(CardViewer), _dec9 = property(EffectManager), _dec10 = property(ResultViewer), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameViewer, _Component);

        function GameViewer() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "mainCam", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btn_EnsureMove", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btn_EndTurn", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "FriendStatus", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "EnemyStatus", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "playerStatus", _descriptor6, _assertThisInitialized(_this));

          _this.mapViewer = void 0;
          _this.characterViewer = new Map();

          _initializerDefineProperty(_this, "cardViewer", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "effectManager", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "resultViewer", _descriptor9, _assertThisInitialized(_this));

          _this.manager = null;
          return _this;
        }

        var _proto = GameViewer.prototype;

        _proto.Initial = function Initial(gamemanager) {
          this.manager = gamemanager;
          this.mapViewer = new MapViewer(this.manager.mapSprite, this.manager.mapRange);
          this.InitialCharacterViewer();
          this.RefreshCurrentPlayerInfo(this.manager.playerData);
        };

        _proto.InitialCharacterViewer = function InitialCharacterViewer() {
          for (var i = 0; i < this.manager.charatersData.length; i++) {
            this.manager.charatersData[i].prefab.setPosition(this.manager.map.children[SeatConvertMapSeat(this.manager.charatersData[i].seat, this.manager.mapRange)].position);
            var viewer = new CharacterViewer(this.manager.charatersData[i].prefab.getComponentInChildren(Sprite), this.manager.charatersData[i].prefab.getComponent(Animation), this.manager.charatersData[i].tag);
            this.characterViewer.set(i, viewer);
          }
        };

        _proto.RefreshCurrentCharacterInfo = function RefreshCurrentCharacterInfo(data) {
          if (data.tag === "Friendly") {
            SoundManager.Instance.PlaySEFX("SEFX_CharacterInfo");
            this.FriendStatus.SetName(data.name);
            this.FriendStatus.SetHP(data.currentHp, data.maxHp);
            this.FriendStatus.SetBlock(data.currentDef, data.maxDef);
            this.FriendStatus.SetCharacterValue(data.currentAtk, data.currentMoveRange);
            this.FriendStatus.CallFriendInfoShow(); //this.FriendStatus.SetHeadSprite()
          } else {
            SoundManager.Instance.PlaySEFX("SEFX_CharacterInfo");
            this.EnemyStatus.SetName(data.name);
            this.EnemyStatus.SetHP(data.currentHp, data.maxHp);
            this.EnemyStatus.SetBlock(data.currentDef, data.maxDef);
            this.EnemyStatus.SetCharacterValue(data.currentAtk, data.currentMoveRange);
            this.EnemyStatus.CallEnemyInfoShow(); //this.FriendStatus.SetHeadSprite()
          }
        };

        _proto.InitialSmallCharacterStatus = function InitialSmallCharacterStatus(data) {
          data.prefab.getComponent(SmallCharacterViewer).Initial(data);
        };

        _proto.RefreshSmallCharacterStatus = function RefreshSmallCharacterStatus(data) {
          try {
            var view = data.prefab.getComponent(SmallCharacterViewer);
            view.SetBlock();
            view.SetHp();
          } catch (_unused) {}
        };

        _proto.PlayCharacterAnimation = function PlayCharacterAnimation(data, Status, callback) {
          try {
            var view = data.prefab.getComponent(SmallCharacterViewer);
            view.PlayCharacterAni(Status, callback);
          } catch (_unused2) {}
        };

        _proto.PlayCharacterDeath = /*#__PURE__*/function () {
          var _PlayCharacterDeath = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
            var view;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    console.log("match");
                    view = data.prefab.getComponent(SmallCharacterViewer);
                    _context.next = 5;
                    return view.PlayCharacterDeath();

                  case 5:
                    _context.t0 = this.manager.CheckMatch();
                    _context.next = _context.t0 === 'Matching' ? 8 : _context.t0 === 'Victory' ? 9 : _context.t0 === 'Defeat' ? 11 : 13;
                    break;

                  case 8:
                    return _context.abrupt("break", 13);

                  case 9:
                    this.ShowResultWin();
                    return _context.abrupt("break", 13);

                  case 11:
                    this.ShowResultLose();
                    return _context.abrupt("break", 13);

                  case 13:
                    _context.next = 17;
                    break;

                  case 15:
                    _context.prev = 15;
                    _context.t1 = _context["catch"](0);

                  case 17:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 15]]);
          }));

          function PlayCharacterDeath(_x) {
            return _PlayCharacterDeath.apply(this, arguments);
          }

          return PlayCharacterDeath;
        }();

        _proto.ShowCharacterHurtEffect = function ShowCharacterHurtEffect(pos, damage) {
          return this.effectManager.HurtEffect(pos, damage);
        };

        _proto.ShowAttackHitEffect = function ShowAttackHitEffect(pos, hitName) {
          this.effectManager.HitEffect(pos, hitName);
        };

        _proto.RefreshCurrentPlayerInfo = function RefreshCurrentPlayerInfo(data) {
          this.playerStatus.SetPlayerStatus(data);
        };

        _proto.RenderAttackRange = function RenderAttackRange(attackRange, renderColor) {
          this.mapViewer.RenderMapColor(attackRange, renderColor);
        };

        _proto.CancelShowRange = function CancelShowRange() {
          var x = this.manager.mapRange.x;
          var y = this.manager.mapRange.y;

          for (var i = 0; i < y; i++) {
            for (var a = 0; a < x; a++) {
              this.mapViewer.RenderMapColor([new Seat(a, i)], this.manager.mapData.moveMap[i][a].canArrvied ? Color.BLUE : Color.GRAY);
            }
          }
        };

        _proto.RenderMoveRange = function RenderMoveRange() {
          var x = this.manager.mapRange.x;
          var y = this.manager.mapRange.y;

          for (var i = 0; i < y; i++) {
            for (var a = 0; a < x; a++) {
              this.mapViewer.RenderMapColor([new Seat(a, i)], this.manager.mapData.moveMap[i][a].canArrvied ? Color.BLUE : Color.GRAY);
            }
          }
        };

        _proto.ShowBehaviorBtn = function ShowBehaviorBtn() {
          var turnBehavior = null;

          for (var i = 0; i < this.manager.charatersData.length; i++) {
            if (this.manager.charatersData[i].behaviorStatus === "moving") {
              turnBehavior = "moving";
              break;
            }

            turnBehavior = "idel";
          }

          console.log(turnBehavior);

          switch (turnBehavior) {
            case "moving":
              {
                this.btn_EnsureMove.node.active = true;
                this.btn_EndTurn.node.active = false;
                break;
              }

            case "idel":
              {
                this.btn_EnsureMove.node.active = false;
                this.btn_EndTurn.node.active = true;
                break;
              }
          }
        };

        _proto.HideBehaviorBtn = function HideBehaviorBtn() {
          console.log("hide");
          this.btn_EnsureMove.node.active = false;
          this.btn_EndTurn.node.active = false;
        };

        _proto.TakeCardAni = function TakeCardAni(amount, cardID) {
          this.cardViewer.AddCard(amount, cardID);
        };

        _proto.UseCard = function UseCard() {
          this.cardViewer.RemoveCard();
        };

        _proto.CleanHandleCard = function CleanHandleCard() {
          this.cardViewer.Center.removeAllChildren();
        };

        _proto.ShowResultWin = function ShowResultWin() {
          this.mainCam.enabled = false;
          this.resultViewer.ShowWin();
        };

        _proto.ShowResultLose = function ShowResultLose() {
          this.mainCam.enabled = false;
          this.resultViewer.ShowLose();
        };

        return GameViewer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainCam", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btn_EnsureMove", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btn_EndTurn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "FriendStatus", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "EnemyStatus", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "playerStatus", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "cardViewer", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "effectManager", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "resultViewer", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./AITest.ts', './CardViewer.ts', './Cardtest.ts', './GameClass.ts', './GameData.ts', './GameManager.ts', './GameViewer.ts', './AIManager.ts', './Arms.ts', './CardManager.ts', './EffectManager.ts', './MoveManager.ts', './SoundManager.ts', './CharacterViewer.ts', './MapViewer.ts', './PlayerViewer.ts', './ResultViewer.ts', './SmallCharacterViewer.ts', './StatusViewer.ts', './test.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MapViewer.ts", ['cc', './GameClass.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, SeatConvertMapSeat;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      SeatConvertMapSeat = module.SeatConvertMapSeat;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "81aedxBuohE95XBNqmUvvPS", "MapViewer", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MapViewer = exports('MapViewer', (_dec = ccclass('MapViewer'), _dec(_class = /*#__PURE__*/function () {
        function MapViewer(mapSprites, mapRange) {
          this.mapRange = null;
          this.mapPlates = [];
          this.mapRange = mapRange;
          this.mapPlates = mapSprites;
        }

        var _proto = MapViewer.prototype;

        _proto.RenderMapColor = function RenderMapColor(Seats, color) {
          var _this = this;

          var indexs = [];
          Seats.forEach(function (seat) {
            indexs.push(SeatConvertMapSeat(seat, _this.mapRange));
          });
          indexs.forEach(function (index) {
            _this.mapPlates[index].color = color;
          });
        };

        _proto.RenderMapColorIndex = function RenderMapColorIndex(indexs, color) {
          var _this2 = this;

          indexs.forEach(function (index) {
            _this2.mapPlates[index].color = color;
          });
        };

        return MapViewer;
      }()) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MoveManager.ts", ['cc', './GameClass.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Seat;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      Seat = module.Seat;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "f1804FnAtRB6qM0fnrQ9nva", "MoveManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MoveManager = exports('MoveManager', (_dec = ccclass('MoveManager'), _dec(_class = /*#__PURE__*/function () {
        function MoveManager(charadata, range) {
          this.data = [];
          this.BigMap = [];
          this.moveMap = [];
          this.mapRange = null;
          this.data = charadata;
          this.mapRange = range;
          this.Initial();
        }

        var _proto = MoveManager.prototype;

        _proto.Initial = function Initial() {
          this.SetMap();
          this.moveMap.forEach(function (plates) {
            plates.forEach(function (plate) {
              plate.canArrvied = false;
            });
          });
        };

        _proto.MoveInitial = function MoveInitial(startSeat, moveValue) {
          this.SetMap();
          this.SetObstruct(startSeat);
          this.SetArrvied(startSeat, moveValue);
        };

        _proto.AttackInitial = function AttackInitial(startSeat, moveValue) {
          this.SetMap();
          this.SetArrvied(startSeat, moveValue);
        };

        _proto.SetMap = function SetMap() {
          this.BigMap = [];
          this.moveMap = [];

          for (var i = 0; i < this.mapRange.y; i++) {
            var aryX = [];
            var plateX = [];

            for (var a = 0; a < this.mapRange.x; a++) {
              aryX.push(true);
              plateX.push(new Plate());
            }

            this.BigMap.push(aryX);
            this.moveMap.push(plateX);
          }
        };

        _proto.SetObstruct = function SetObstruct(startSeat) {
          var _this = this;

          var obstructSeat = [];
          this.data.forEach(function (Element) {
            if (Element.seat != startSeat) obstructSeat.push(Element.seat);
          });
          obstructSeat.forEach(function (e) {
            _this.BigMap[e.y][e.x] = false;
          });
        };

        _proto.SetArrvied = function SetArrvied(startSeat, moveValue) {
          this.moveMap[startSeat.y][startSeat.x].Check(this.mapRange, this.moveMap, this.BigMap, startSeat, moveValue);
        };

        _proto.SearchSeatCanArrived = function SearchSeatCanArrived(seat) {
          return this.moveMap[seat.y][seat.x].canArrvied;
        };

        return MoveManager;
      }()) || _class));
      var Plate = exports('Plate', /*#__PURE__*/function () {
        function Plate() {
          this.hasArrived = false;
          this.canArrvied = false;
          this.energy = 0;
        }

        var _proto2 = Plate.prototype;

        _proto2.Check = function Check(mapRange, moveMap, bigMap, seat, energy) {
          if (bigMap[seat.y][seat.x]) if (!this.hasArrived || this.hasArrived && energy > moveMap[seat.y][seat.x].energy) {
            this.hasArrived = true;
            this.canArrvied = energy >= 0;
            this.energy = energy--;

            if (this.energy > 0) {
              if (seat.x < mapRange.x - 1) moveMap[seat.y][seat.x + 1].Check(mapRange, moveMap, bigMap, new Seat(seat.x + 1, seat.y), this.energy - 1);
              if (seat.x > 0) moveMap[seat.y][seat.x - 1].Check(mapRange, moveMap, bigMap, new Seat(seat.x - 1, seat.y), this.energy - 1);
              if (seat.y < mapRange.y - 1) moveMap[seat.y + 1][seat.x].Check(mapRange, moveMap, bigMap, new Seat(seat.x, seat.y + 1), this.energy - 1);
              if (seat.y > 0) moveMap[seat.y - 1][seat.x].Check(mapRange, moveMap, bigMap, new Seat(seat.x, seat.y - 1), this.energy - 1);
            }
          }
        };

        return Plate;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PlayerViewer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, ProgressBar, tween, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      ProgressBar = module.ProgressBar;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "32b2bb/FIFATL91wIEX+A3l", "PlayerViewer", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PlayerViewer = exports('PlayerViewer', (_dec = ccclass('PlayerViewer'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(ProgressBar), _dec5 = property(ProgressBar), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PlayerViewer, _Component);

        function PlayerViewer() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "txt_Cost", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "txt_Energy", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bar_Cost", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bar_Energy", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = PlayerViewer.prototype;

        _proto.SetPlayerStatus = function SetPlayerStatus(playerData) {
          this.txt_Energy.string = "\u5269\u9918\u79FB\u52D5\u529B\uFF1A" + playerData.currentEnergy;
          tween(this.bar_Energy).to(0.2, {
            progress: playerData.currentEnergy / playerData.maxEnergy
          }).start();
          this.txt_Cost.string = "Cost:\r\n" + (playerData.currentCost + " / " + playerData.maxCost + " ");
        };

        return PlayerViewer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_Cost", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txt_Energy", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bar_Cost", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bar_Energy", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResultViewer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SoundManager.ts', './GameData.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Label, Sprite, Button, director, game, Component, SoundManager, GameData;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Label = module.Label;
      Sprite = module.Sprite;
      Button = module.Button;
      director = module.director;
      game = module.game;
      Component = module.Component;
    }, function (module) {
      SoundManager = module.SoundManager;
    }, function (module) {
      GameData = module.GameData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

      cclegacy._RF.push({}, "da2e23yg6tIJq5sEXYHRHgT", "ResultViewer", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ResultViewer = exports('ResultViewer', (_dec = ccclass('ResultViewer'), _dec2 = property(SpriteFrame), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Sprite), _dec7 = property(Button), _dec8 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ResultViewer, _Component);

        function ResultViewer() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "headerSource", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "headerLabel", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "label_PlayAgain", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "label_EndGame", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "headerSprite", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btn_PlayAgain", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btn_EndGame", _descriptor7, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = ResultViewer.prototype;

        _proto.start = function start() {
          this.btn_PlayAgain.node.on("click", function () {
            console.log("again");
            director.loadScene("scene");
          }, this);
          this.btn_EndGame.node.on("click", function () {
            game.end();
          }, this);
        };

        _proto.ShowWin = function ShowWin() {
          for (var i = 0; i < 2; i++) {
            if (GameData.Instance.currentStage == GameData.Instance.stageCharatersData.length - 1) {
              this.headerLabel[i].string = "通關！";
              this.label_PlayAgain[i].string = "重新來過";
            } else {
              this.headerLabel[i].string = "勝利！";
              this.label_PlayAgain[i].string = "下一關卡";
            }
          }

          if (GameData.Instance.currentStage == GameData.Instance.stageCharatersData.length - 1) {
            GameData.Instance.currentStage = 0;
          } else {
            GameData.Instance.currentStage += 1;
          }

          this.headerSprite.spriteFrame = this.headerSource[0];
          this.node.active = true;
          SoundManager.Instance.PlayBGM("BGM_Win", false);
        };

        _proto.ShowLose = function ShowLose() {
          for (var i = 0; i < 2; i++) {
            this.headerLabel[i].string = "失敗！";
            this.label_PlayAgain[i].string = "再次挑戰";
          }

          this.headerSprite.spriteFrame = this.headerSource[1];
          this.node.active = true;
          SoundManager.Instance.PlayBGM("BGM_Lose", false);
        };

        return ResultViewer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "headerSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "headerLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "label_PlayAgain", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "label_EndGame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "headerSprite", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btn_PlayAgain", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btn_EndGame", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SmallCharacterViewer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameClass.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, ProgressBar, Label, Animation, tween, Component, Status;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ProgressBar = module.ProgressBar;
      Label = module.Label;
      Animation = module.Animation;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      Status = module.Status;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "959ee+WClxGCKxxfxFC31pe", "SmallCharacterViewer", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SmallCharacterViewer = exports('SmallCharacterViewer', (_dec = ccclass('SmallCharacterViewer'), _dec2 = property(ProgressBar), _dec3 = property(ProgressBar), _dec4 = property(Label), _dec5 = property(Animation), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SmallCharacterViewer, _Component);

        function SmallCharacterViewer() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "HPBar", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "BlockBar", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "damage", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ani", _descriptor4, _assertThisInitialized(_this));

          _this.data = null;
          return _this;
        }

        var _proto = SmallCharacterViewer.prototype;

        _proto.Initial = function Initial(characterData) {
          this.data = characterData;
          tween(this.HPBar).to(0.2, {
            progress: this.data.maxHp == 0 ? 0 : this.data.currentHp / this.data.maxHp
          }).start();
          tween(this.BlockBar).to(0.2, {
            progress: this.data.maxDef == 0 ? 0 : this.data.currentDef / this.data.maxHp
          }).start();

          if (this.data.tag == "Friendly") {
            this.ani.play("UnityChan_Idle");
          } else {
            this.ani.play("Goblin_Idle");
          } //this.ani.play();

        };

        _proto.SetBlock = function SetBlock() {
          tween(this.BlockBar).to(0.2, {
            progress: this.data.maxDef == 0 ? 0 : this.data.currentDef / this.data.maxHp
          }).start();
        };

        _proto.SetHp = function SetHp() {
          tween(this.HPBar).to(0.2, {
            progress: this.data.maxHp == 0 ? 0 : this.data.currentHp / this.data.maxHp
          }).start();
        };

        _proto.PlayCharacterDeath = /*#__PURE__*/function () {
          var _PlayCharacterDeath = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return new Promise(function (res) {
                      _this2.ani.off(Animation.EventType.FINISHED);

                      if (_this2.data.tag == "Friendly") _this2.ani.play("UnityChan_Death");else _this2.ani.play("Goblin_Death");

                      _this2.ani.on(Animation.EventType.FINISHED, function () {
                        res();
                      });
                    });

                  case 2:
                    this.node.destroy();

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function PlayCharacterDeath() {
            return _PlayCharacterDeath.apply(this, arguments);
          }

          return PlayCharacterDeath;
        }();

        _proto.PlayCharacterAni = function PlayCharacterAni(status, callback) {
          var _this3 = this;

          this.ani.on(Animation.EventType.FINISHED, function () {
            callback();

            _this3.ani.off(Animation.EventType.FINISHED);

            if (_this3.data.tag == "Friendly") {
              _this3.ani.play("UnityChan_Idle");
            } else {
              _this3.ani.play("Goblin_Idle");
            }
          }, this);

          switch (status) {
            case Status.Idel:
              if (this.data.tag == "Friendly") this.ani.play("UnityChan_Idle");else this.ani.play("Goblin_Idle");
              break;

            case Status.Attack:
              if (this.data.tag == "Friendly") {
                if (this.data.armTag == "Archer") this.ani.play("UnityChan_Archer_Attack");else this.ani.play("UnityChan_Attack");
              } else this.ani.play("Goblin_Attack");

              break;

            case Status.damage:
              if (this.data.tag == "Friendly") this.ani.play("UnityChan_Damage");else this.ani.play("Goblin_Damage");
              break;
          }
        };

        return SmallCharacterViewer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "HPBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "BlockBar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "damage", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ani", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SoundManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, AudioSource, AudioClip, Component, resources;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      AudioClip = module.AudioClip;
      Component = module.Component;
      resources = module.resources;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3;

      cclegacy._RF.push({}, "2537dRcpwBHsrKf1an66ORG", "SoundManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SoundManager = exports('SoundManager', (_dec = ccclass('SoundManager'), _dec2 = property(AudioSource), _dec3 = property(AudioSource), _dec4 = property(AudioClip), _dec5 = property(AudioClip), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SoundManager, _Component);

        function SoundManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "bgm", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "sfex", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "BGMclips", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "SEFXclips", _descriptor4, _assertThisInitialized(_this));

          _this.canPlaySFEX = true;
          return _this;
        }

        var _proto = SoundManager.prototype;

        _proto.onLoad = function onLoad() {
          SoundManager.Instance = this;
        };

        _proto.PlayBGM = /*#__PURE__*/function () {
          var _PlayBGM = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(soundID, isLoop) {
            var _this2 = this;

            var hasSource, clip, i;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.bgm.stop();
                    hasSource = false;
                    clip = null;
                    i = 0;

                  case 4:
                    if (!(i < this.BGMclips.length)) {
                      _context.next = 12;
                      break;
                    }

                    if (!(this.BGMclips[i].name == soundID)) {
                      _context.next = 9;
                      break;
                    }

                    hasSource = true;
                    clip = this.BGMclips[i];
                    return _context.abrupt("break", 12);

                  case 9:
                    i++;
                    _context.next = 4;
                    break;

                  case 12:
                    if (!hasSource) {
                      _context.next = 19;
                      break;
                    }

                    console.log("此BGM音檔已載入");
                    this.bgm.clip = clip;
                    this.bgm.loop = isLoop;
                    this.bgm.play();
                    _context.next = 21;
                    break;

                  case 19:
                    _context.next = 21;
                    return resources.load("Sound/" + soundID, AudioClip, function (error, source) {
                      if (error != null) throw error;
                      _this2.bgm.clip = source;

                      _this2.BGMclips.push(source);

                      _this2.bgm.loop = isLoop;

                      _this2.bgm.play();
                    });

                  case 21:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function PlayBGM(_x, _x2) {
            return _PlayBGM.apply(this, arguments);
          }

          return PlayBGM;
        }();

        _proto.PlaySEFX = /*#__PURE__*/function () {
          var _PlaySEFX = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(soundID) {
            var _this3 = this;

            var hasSource, clip, i;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!this.canPlaySFEX) {
                      _context2.next = 20;
                      break;
                    }

                    hasSource = false;
                    clip = null;
                    i = 0;

                  case 4:
                    if (!(i < this.SEFXclips.length)) {
                      _context2.next = 12;
                      break;
                    }

                    if (!(this.SEFXclips[i].name == soundID)) {
                      _context2.next = 9;
                      break;
                    }

                    hasSource = true;
                    clip = this.SEFXclips[i];
                    return _context2.abrupt("break", 12);

                  case 9:
                    i++;
                    _context2.next = 4;
                    break;

                  case 12:
                    if (!hasSource) {
                      _context2.next = 18;
                      break;
                    }

                    console.log("此音檔已載入" + soundID);
                    this.sfex.clip = clip;
                    this.sfex.playOneShot(clip, 1);
                    _context2.next = 20;
                    break;

                  case 18:
                    _context2.next = 20;
                    return resources.load("Sound/" + soundID, AudioClip, function (error, source) {
                      console.log("此音檔已從資源載入" + soundID);
                      if (error != null) throw error;
                      _this3.sfex.clip = source;

                      _this3.SEFXclips.push(source);

                      _this3.sfex.playOneShot(source, 1);
                    });

                  case 20:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function PlaySEFX(_x3) {
            return _PlaySEFX.apply(this, arguments);
          }

          return PlaySEFX;
        }();

        _proto.PlayContinueSEFX = /*#__PURE__*/function () {
          var _PlayContinueSEFX = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(soundID) {
            var _this4 = this;

            var hasSource, clip, i;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!this.canPlaySFEX) {
                      _context3.next = 22;
                      break;
                    }

                    hasSource = false;
                    clip = null;
                    i = 0;

                  case 4:
                    if (!(i < this.SEFXclips.length)) {
                      _context3.next = 12;
                      break;
                    }

                    if (!(this.SEFXclips[i].name == soundID)) {
                      _context3.next = 9;
                      break;
                    }

                    hasSource = true;
                    clip = this.SEFXclips[i];
                    return _context3.abrupt("break", 12);

                  case 9:
                    i++;
                    _context3.next = 4;
                    break;

                  case 12:
                    if (!hasSource) {
                      _context3.next = 20;
                      break;
                    }

                    console.log("此音檔已載入" + soundID);
                    this.sfex.clip = clip;
                    this.sfex.playOneShot(clip, 1);
                    this.canPlaySFEX = false;
                    this.scheduleOnce(function () {
                      _this4.canPlaySFEX = true;
                    }, 0.025);
                    _context3.next = 22;
                    break;

                  case 20:
                    _context3.next = 22;
                    return resources.load("Sound/" + soundID, AudioClip, function (error, source) {
                      if (error != null) throw error;
                      _this4.sfex.clip = source;

                      _this4.SEFXclips.push(source);

                      _this4.sfex.playOneShot(source, 1);

                      _this4.canPlaySFEX = false;

                      _this4.scheduleOnce(function () {
                        _this4.canPlaySFEX = true;
                      }, 0.025);
                    });

                  case 22:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          function PlayContinueSEFX(_x4) {
            return _PlayContinueSEFX.apply(this, arguments);
          }

          return PlayContinueSEFX;
        }();

        return SoundManager;
      }(Component), _class3.Instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgm", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sfex", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "BGMclips", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "SEFXclips", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StatusViewer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Sprite, ProgressBar, Node, tween, Vec3, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Sprite = module.Sprite;
      ProgressBar = module.ProgressBar;
      Node = module.Node;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

      cclegacy._RF.push({}, "a0ab0NDY0FIE4ILAFJJ246y", "StatusViewer", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var StatusViewer = exports('StatusViewer', (_dec = ccclass('StatusViewer'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Sprite), _dec7 = property(ProgressBar), _dec8 = property(ProgressBar), _dec9 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(StatusViewer, _Component);

        function StatusViewer() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "txt_HP", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "txt_Block", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "txt_Name", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "txt_Attack", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "s_Head", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bar_HP", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bar_Block", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "main", _descriptor8, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = StatusViewer.prototype;

        _proto.SetName = function SetName(name) {
          this.txt_Name.string = name;
        };

        _proto.SetHP = function SetHP(currentHP, maxHP) {
          this.txt_HP.string = "HP:" + currentHP + "/" + maxHP;
          tween(this.bar_HP).to(0.2, {
            progress: maxHP == 0 ? 0 : currentHP / maxHP
          }).start();
        };

        _proto.SetBlock = function SetBlock(currentBlock, maxBlock) {
          this.txt_Block.string = "Stock:" + currentBlock + "/" + maxBlock;
          tween(this.bar_Block).to(0.2, {
            progress: maxBlock == 0 ? 0 : currentBlock / maxBlock
          }).start();
        };

        _proto.SetCharacterValue = function SetCharacterValue(currentATK, currentMoveRange) {
          this.txt_Attack.string = "ATK:" + currentATK + " MoveRange:" + currentMoveRange;
        };

        _proto.SetHeadSprite = function SetHeadSprite(sprite) {
          this.s_Head.spriteFrame = sprite;
        };

        _proto.CallFriendInfoShow = function CallFriendInfoShow() {
          var _this2 = this;

          tween(this.node).to(0.3, {
            position: new Vec3(-340, 15.7, 0)
          }, {
            easing: "quadOut"
          }).call(function () {
            _this2.main.active = false;
            _this2.main.active = true;
          }).to(0.5, {
            position: new Vec3(-20, 15.7, 0)
          }, {
            easing: "backOut"
          }).start();
        };

        _proto.CallEnemyInfoShow = function CallEnemyInfoShow() {
          var _this3 = this;

          console.log("call");
          tween(this.node).to(0.3, {
            position: new Vec3(340, 15.7, 0)
          }, {
            easing: "quadOut"
          }).call(function () {
            _this3.main.active = false;
            _this3.main.active = true;
          }).to(0.5, {
            position: new Vec3(20, 15.7, 0)
          }, {
            easing: "backOut"
          }).start();
        };

        return StatusViewer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_HP", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txt_Block", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_Name", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txt_Attack", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "s_Head", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bar_HP", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bar_Block", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "main", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/test.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Camera, Node, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "893fbjMoXNJvYOUpshbCRVn", "test", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var test = exports('test', (_dec = ccclass('test'), _dec2 = property(Camera), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(test, _Component);

        function test() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "cam", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = test.prototype;

        _proto.start = function start() {
          var _this2 = this;

          this.node.on(Node.EventType.MOUSE_DOWN, function (event) {
            // console.log(new Vec3(event.getLocationInView.x, event.getLocationInView.y, 0));
            // console.log(this.cam.screenToWorld(new Vec3(event.getLocationX(), event.getLocationY(), 0)));
            // let pos = this.cam.screenToWorld(new Vec3(event.getLocationX(), event.getLocationY(), 0));
            // this.node.setPosition(new Vec3(pos.x - 530, pos.y - 370, 0));
            _this2.node.parent = null;
          }, this);
        };

        return test;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "cam", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});