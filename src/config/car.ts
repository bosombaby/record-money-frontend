export type CarConfig = typeof carConfig

export const carConfig = {
  crp: {
    svrOption: [
      { label: '(多PRE) 10.128.39.39:21735', value: '10.128.39.39:21735' },
      { label: '(多STG) 10.129.36.207:21735', value: '10.129.36.207:21735' },
      { label: '(单PRE) 10.128.39.56:21436', value: '10.128.39.56:21436' },
      { label: '(单STG) 10.129.26.210:21436', value: '10.129.26.210:21436' },
      {
        label: '(离线调试环境) 192.168.128.11:11336',
        value: '192.168.128.11:11336',
      },
      { label: '国际化线下测试环境', value: '192.168.128.11:8585' },
      { label: '国际化STG环境', value: '10.188.32.189:22014' },
      { label: '多路线带调试的环境', value: '192.168.128.12:11336' },
      { label: '货车消息列表', value: '192.168.128.12:4499' },
    ],
    stgyList: [
      { label: '0 - 时间', strategy: '0', value: 30, selected: true },
      { label: '1 - 距离', strategy: '1', value: 1, selected: false },
      { label: '2 - 少收费 ', strategy: '2', value: 1, selected: false },
      { label: '3 - 不走高速', strategy: '3', value: 1, selected: false },
      { label: '4 - 躲避拥堵', strategy: '4', value: 30, selected: false },
      { label: '5 - 本地车', strategy: '5', value: 10, selected: false },
      { label: '6 - 外地车1', strategy: '6', value: 10, selected: false },
      { label: '7 - 外地车2', strategy: '7', value: 10, selected: false },
    ],
  },
}
