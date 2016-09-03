def fib (n)
  fib_at = lambda do |pos|  
    if pos < 3
      return 1
    end
    fib_at.call(pos - 1) + fib_at.call(pos - 2)
  end
  fib_at.call(n)
end

p fib(9)


