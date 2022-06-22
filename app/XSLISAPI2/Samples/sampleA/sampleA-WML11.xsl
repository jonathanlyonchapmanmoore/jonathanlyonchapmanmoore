<?xml version="1.0" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/TR/WD-xsl">
  <xsl:template match="/" >
    <xsl:pi name="xml">version="1.0"</xsl:pi>
    <xsl:doctype>wml PUBLIC "-//WAPFORUM//DTD WML 1.1//EN" "http://www.wapforum.org/DTD/wml_1.1.xml"</xsl:doctype>
    <wml>
      <card>
        <p>

          <!-- Show the name of each color-->
          <xsl:for-each select="colors/color">
            <xsl:value-of select="name"/>
            <br/>
          </xsl:for-each>
        </p>
      </card>
    </wml>
  </xsl:template>
</xsl:stylesheet>
