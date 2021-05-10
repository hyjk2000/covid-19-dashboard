cube(`Covid19NewZealand`, {
  title: "COVID-19 in New Zealand",
  sql: `SELECT * FROM public.covid_19_new_zealand`,

  joins: {},

  measures: {
    testsByDay: {
      title: `Tests by Day`,
      sql: `value`,
      type: `sum`,
      filters: [{ sql: `${CUBE}.sub_series_name = 'Tests by day'` }],
    },
    testsTotal: {
      title: `Total Tests Performed`,
      sql: `value`,
      type: `sum`,
      filters: [
        { sql: `${CUBE}.sub_series_name = 'Total tests (cumulative)'` },
      ],
    },
    casesActive: {
      title: `Active Cases`,
      sql: `value`,
      type: `sum`,
      filters: [{ sql: `${CUBE}.sub_series_name = 'Active'` }],
    },
    casesRecovered: {
      title: `Recovered Cases`,
      sql: `value`,
      type: `sum`,
      filters: [{ sql: `${CUBE}.sub_series_name = 'Recovered'` }],
    },
    casesDeceased: {
      title: `Deceased Cases`,
      sql: `value`,
      type: `sum`,
      filters: [{ sql: `${CUBE}.sub_series_name = 'Deceased'` }],
    },
  },

  dimensions: {
    parameter: {
      title: `Date`,
      sql: `parameter`,
      type: `time`,
    },
  },

  dataSource: `default`,
});
