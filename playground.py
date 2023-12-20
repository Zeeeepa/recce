from recce.dbt import DBTContext


def main():
    ctx = DBTContext.load()
    # results = ctx.foo_bar('customer_id', 'customers')
    results = ctx.foo_bar('event_id', 'stg_oss__events')
    for line in results:
        print(line)


if __name__ == '__main__':
    main()
