export {}

type Options = {
  req: string
  res: string
}

class HttpResponder {
  private options: Options

  public intercept(options: Options) {
    this.options = options
    console.log(this.options)
  }
}

const res = new HttpResponder()
res.intercept({ req: "req", res: "res" })
