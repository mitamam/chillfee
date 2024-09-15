import '@/app/ui/global.css';
import { notoSansJapanese } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJapanese.className} text-textbk antialiased`}>
        {children}
      </body>
    </html>
  )
}