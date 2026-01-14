let isRunning = false

self.onmessage = (e: MessageEvent) => {
  if (isRunning) return
  isRunning = true

  const state = e.data
  const { activeTask, secondsRemaining } = state

  const endTime = activeTask.startedAt + secondsRemaining * 1000

  const tick = () => {
    const now = Date.now()
    const countDownSeconds = Math.max(0, Math.ceil((endTime - now) / 1000))

    self.postMessage(countDownSeconds)

    if (countDownSeconds > 0) {
      setTimeout(tick, 1000)
    }
  }

  tick()
}
