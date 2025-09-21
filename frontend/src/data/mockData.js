// Mock data for SILVION Pet Care products
export const mockProducts = [
  {
    id: 1,
    name: "PET CARE NANO SPRAY",
    description: "Nano teknoloji ile geliştirilmiş antibakteriyel sprey. Evcil hayvanlarınızın hijyenini sağlar ve kötü kokuları yok eder.",
    features: ["Antibakteriyel", "Hızlı Etki", "Doğal Formül"],
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&h=300&fit=crop&crop=center",
    category: "Hijyen"
  },
  {
    id: 2,
    name: "PET CARE NANO TOWEL",
    description: "Özel nano fiber teknolojisi ile üretilmiş havlu. Maksimum emiciliği ve antibakteriyel özellikleri ile öne çıkar.",
    features: ["Nano Fiber", "Antibakteriyel", "Yüksek Emicilik"],
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop&crop=center",
    category: "Bakım"
  },
  {
    id: 3,
    name: "PET CARE NANO WIPES",
    description: "Günlük bakım için ideal nano teknoloji mendilleri. Hassas ciltler için özel olarak formüle edilmiştir.",
    features: ["Hassas Formül", "Pratik Kullanım", "Dermatolog Onaylı"],
    image: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=400&h=300&fit=crop&crop=center", 
    category: "Temizlik"
  }
];

// Mock testimonials data
export const mockTestimonials = [
  {
    id: 1,
    name: "Ayşe Demir",
    role: "Kedi Sahibi",
    comment: "SILVION ürünlerini kullandığımdan beri kedim çok daha sağlıklı. Özellikle nano spray'in etkisi muhteşem!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=60&h=60&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Mehmet Kaya",
    role: "Köpek Sahibi", 
    comment: "Nano towel gerçekten çok kaliteli. Köpeğimi yıkadıktan sonra kurutmak hiç bu kadar kolay olmamıştı.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Zehra Özkan",
    role: "Veteriner Teknisyeni",
    comment: "Profesyonel olarak tavsiye ediyorum. Doğal ve etkili formülasyonu ile güvenle kullanılabilir.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=60&h=60&fit=crop&crop=face"
  }
];

// Mock contact form submissions (for frontend demo)
export const handleContactSubmit = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form submitted:", formData);
      resolve({ success: true, message: "Mesajınız başarıyla gönderildi!" });
    }, 1000);
  });
};