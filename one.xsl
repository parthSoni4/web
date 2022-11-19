<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
  <h2>Available destination</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th>city</th>
      <th>state</th>
      <th>pincode</th>
      <th>stars</th>
      <th>hotelname</th>
      <th>pool</th>
    </tr>
    <br />
    <xsl:for-each select="available/destination">
    <tr>
      <td><xsl:value-of select="city"/></td>
      <td><xsl:value-of select="state"/></td>
      <td><xsl:value-of select="pincode"/></td>
      <td><xsl:value-of select="stars"/></td>
      <td><xsl:value-of select="hotelName"/></td>
      <td><xsl:value-of select="pool"/></td>



    </tr>
    </xsl:for-each>
  </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>