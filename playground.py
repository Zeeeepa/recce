from recce.dbt import DBTContext


def main():
    ctx = DBTContext.load()
    results = ctx.columns_value_mismatched_summary('event_id', 'stg_oss__events')
    # results = ctx.columns_value_mismatched_summary('customer_id', 'customers')
    print(results)


if __name__ == '__main__':
    main()
