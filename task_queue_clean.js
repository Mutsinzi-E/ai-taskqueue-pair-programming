class TaskQueue {
  constructor(name) {
    this.queueName = name;
    this.tasks = [];
    this.isProcessing = false;
  }

  addTask(taskFn, priority) {
    if (!taskFn || typeof taskFn !== 'function') {
      console.error('Task must be a function.');
      return;
    }

    const task = {
      taskFn,
      priority,
      timestamp: Date.now()
    };

    this.tasks.push(task);
  }

  startIfNeeded() {
    if (this.tasks.length === 1 && !this.isProcessing) {
      this.isProcessing = true;
    }
  }
}

function handleTaskQueueActivity(queue, task) {
  console.log(`Task added to queue ${queue.queueName}.`);

  if (task.priority > 9) {
    console.warn(
      `High priority task added to ${queue.queueName}.`
    );
  }

  queue.startIfNeeded();
}

module.exports = {
  TaskQueue,
  handleTaskQueueActivity
};
