import Vue from 'vue'

import {
  Dialog,
  Container,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Checkbox,
  CheckboxGroup,
  Header,
  Main,
  Footer,
  Aside,
  Form,
  FormItem,
  Input,
  Button,
  Tag,
  Notification,
  Card,
  Carousel,
  CarouselItem,
  Select,
  Option,
  Radio,
  RadioGroup,
  RadioButton,
  InputNumber,
  Col,
  Popover,
  CollapseItem,
  Collapse,
  Message,
  MessageBox,
  Table,
  TableColumn,
  Pagination,
  Tabs,
  TabPane,
} from 'element-ui'
Vue.use(MenuItemGroup)
Vue.use(Pagination)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Dialog)
Vue.use(Container)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(MenuItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Tag)
Vue.use(Card)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(InputNumber)
Vue.use(Col)
Vue.use(Popover)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Tabs)
Vue.use(TabPane)

Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt

Vue.component(Message.name, Message)
