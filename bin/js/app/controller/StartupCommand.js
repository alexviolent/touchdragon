var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var StartupCommand = /** @class */ (function (_super) {
    __extends(StartupCommand, _super);
    function StartupCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StartupCommand.prototype.initializeMacroCommand = function () {
        _super.prototype.initializeMacroCommand.call(this);
    };
    StartupCommand.prototype.execute = function (note) {
        _super.prototype.execute.call(this, note);
        this.facade.registerProxy(new GameProxy());
        this.facade.registerMediator(new AppContextMediator(note.getBody()));
        this.facade.registerMediator(IndexMediator.get());
    };
    return StartupCommand;
}(BaseMacroCommand));
//# sourceMappingURL=StartupCommand.js.map