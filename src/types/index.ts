// 基本服务项目类型
export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// 作品集项目类型
export interface PortfolioItem {
  id: number;
  imageUrl: string;
  title?: string;
  category?: string;
}

// 联系表单类型
export interface ContactForm {
  name: string;
  email: string;
  message: string;
} 