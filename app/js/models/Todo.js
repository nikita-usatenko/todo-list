const Todo = function (description, status, createdAt) {
  this.description = description;
  this.status = status;
  this.createdAt = createdAt;
};

Todo.prototype.getDescription = function () {
  return this.description;
};

Todo.prototype.getStatus = function () {
  return this.status;
};

Todo.prototype.setDescription = function (description) {
  this.description = description;
};

Todo.prototype.setStatus = function (status) {
  this.status = status;
};

export default Todo;

